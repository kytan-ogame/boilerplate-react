import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Code de traitement du formulaire de contact
  };

  return (
    <div>
      <Typography variant="h1" component="h1">
        Contactez-nous
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Nom" id="name" fullWidth />
        <TextField label="Email" id="email" fullWidth type="email" />
        <TextField label="Message" id="message" fullWidth multiline rows={4} />
        <Button type="submit" variant="contained">
          Envoyer
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;
