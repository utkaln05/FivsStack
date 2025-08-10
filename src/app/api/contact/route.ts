import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
  try {
    // Connect to the database
    await connectToDatabase();
    
    // Parse the request body
    const body = await request.json();
    
    // Create a new contact document
    const contact = new Contact({
      name: body.name,
      email: body.email,
      message: body.message,
      submittedAt: new Date()
    });
    
    // Save the contact to the database
    await contact.save();
    
    // Return a success response
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json(
      { error: 'Failed to save contact information' },
      { status: 500 }
    );
  }
}