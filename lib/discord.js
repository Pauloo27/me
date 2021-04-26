export default function executeWebhook(url, info) {
  if (!url) throw new Error("Discord Webhook URL is undefined");

  const {
    name, email, subject, message,
  } = info;
  const body = {
    embeds: [
      {
        color: 0xC0FFEE,
        title: `New message from ${name}`,
        fields: [
          {
            name: "Email",
            value: email,
          },
          {
            name: "Subject",
            value: subject,
          },
          {
            name: "Message",
            value: message,
          },
        ],
      },
    ],
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}
