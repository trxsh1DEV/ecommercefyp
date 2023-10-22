import Order from '../models/Order';

class OrderController {
  async index(req, res) {
    try {
      if (!req.userIsAdmin) {
        return res
          .status(401)
          .json({ errors: ['Você não tem esse nivel de acesso'] });
      }
      const orders = await Order.find();
      return res.status(200).json(orders);
    } catch (err) {
      return res
        .status(500)
        .json({ errors: ['Falha ao buscar pedidos', err.message.split(', ')] });
    }
  }

  async show(req, res) {
    try {
      const order = await Order.find({ userId: req.params.userId });
      if (!order) {
        return res.status(400).json({ errors: ['Pedido não encontrado'] });
      }
      return res.status(200).json(order);
    } catch (err) {
      return res
        .status(400)
        .json({ errors: ['Falha ao buscar pedido', err.message.split(', ')] });
    }
  }

  async store(req, res) {
    const newOrder = new Order(req.body);

    try {
      const savedOrder = await newOrder.save();
      return res.status(200).json(savedOrder);
    } catch (err) {
      return res.status(500).json({
        errors: ['Falha ao adicionar pedido', err.message.split(', ')],
      });
    }
  }

  async update(req, res) {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
      );
      if (!updatedOrder) {
        return res.status(400).json({ errors: ['Pedido não encontrado'] });
      }

      return res.status(200).json(updatedOrder);
    } catch (err) {
      return res.status(400).json({
        errors: ['Falha ao atualizar pedido', err.message.split(', ')],
      });
    }
  }

  async delete(req, res) {
    try {
      const deletedOrder = await Order.findByIdAndDelete(req.userId);
      if (!deletedOrder) {
        return res.status(400).json({ errors: ['Pedido não encontrado'] });
      }
      console.log('');
      return res.status(200).json('O pedido foi deletado com sucesso!');
    } catch (err) {
      return res
        .status(400)
        .json({ errors: ['Falha ao deletar pedido', err.message.split(', ')] });
    }
  }

  async income(req, res) {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1),
    );

    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: '$createdAt' },
            sales: '$amount',
          },
        },
        {
          $group: {
            _id: '$month',
            total: { $sum: '$sales' },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json('Falha ao tentar obter dados rendimentos');
    }
  }
}

export default new OrderController();
