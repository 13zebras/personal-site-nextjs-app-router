

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export function sendEmail(data: FormData) {
  const apiEndpoint = '/contact/api/route';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
