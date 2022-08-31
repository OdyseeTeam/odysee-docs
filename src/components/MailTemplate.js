import React from 'react';

export default function MailTemplate({text, mail, subject, body}) {
  return (
	<a target="blank" rel="noopener noreferrer" href={"mailto:" + mail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body).replaceAll("%5Cn","%0D%0A")}>{[text]}</a>
  );
}
