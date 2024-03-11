'use client';
import { useState } from 'react';
import { Button, Textarea, Input } from "@nextui-org/react";
import { title } from "@/components/primitives";
import nodemailer from 'nodemailer';
import {
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  LinkedinIcon,
  PhoneIcon,
  InstagramIcon,
  EmailIcon
} from "@/components/icons";

export default function ContactPage() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('/api/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message }),
    });

    if (response.ok) {
      alert('Your message has been sent!');
      setName('');
      setMessage('');
    } else {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className={title()} style={{ color: 'cyan' }}>Contact</h1>
      <h2 style={{ fontSize: '2em', color: 'violet' }}>
        Interested in working together? Write me a message below so we can collaborate.
      </h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: '1em' }}
        />
        <Textarea
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ marginBottom: '1em' }}
          minRows={5}
          maxLength={2000}
        />
        <Button color="primary" type="submit" style={{ marginTop: '1em' }}>Send Message</Button>
      </form>
      <h3 style={{ fontSize: '2em', color: 'voilet' }}>Contact me directly:</h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <EmailIcon size={24} style={{ color:'cyan', marginRight: '5px' }} />
        <a href="mailto:zbh206@gmail.com" style={{ color: 'cyan' }}>zbh206@gmail.com</a>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PhoneIcon size={24} style={{ color:'violet', marginRight: '5px' }} />
        <a href="tel:+14255298009" style={{ color: 'violet' }}>+1 425-529-8009</a>

      </div>
      
    </div>
  );
}