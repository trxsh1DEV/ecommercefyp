const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmFmMWZjOGI0MWM3YTNkNjlmNjhlZCIsIm1haWwiOiJ5YWdvQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzMxNDk2MCwiZXhwIjoxNjk3OTE5NzYwfQ.-ceeukbRQimIPYSQ65cGPMZ4DM-mG2futohILEnBoa4';

export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
