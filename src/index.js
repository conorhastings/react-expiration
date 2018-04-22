import React from 'react';

export default function Expiration({ render, expirationDate }) {
  return render(new Date() > expirationDate)
}
