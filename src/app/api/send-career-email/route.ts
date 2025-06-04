import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Prepare email content
    const emailContent = `
      New Career Application Received
      
      Personal Information:
      Full Name: ${formData.get('fullName')}
      Father's Name: ${formData.get('fatherName')}
      Mobile Number: ${formData.get('mobileNumber')}
      Permanent Address: ${formData.get('permanentAddress')}
      Current Address: ${formData.get('currentAddress')}
      Aadhar Number: ${formData.get('aadharNumber')}
      
      Professional Details:
      Registration Number: ${formData.get('registrationNumber')}
      Years of Experience: ${formData.get('yearsExperience')}
      Field of Expertise: ${formData.get('fieldOfExpertise')}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'MyAiimscare@gmail.com',
      subject: 'New Career Application - AIIMS Care',
      text: emailContent,
      attachments: [
        formData.get('passportPhoto') as File,
        formData.get('registrationCertificate') as File,
        formData.get('resume') as File
      ].filter(Boolean).map(file => ({
        filename: (file as File).name,
        content: file
      }))
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send application' },
      { status: 500 }
    );
  }
} 