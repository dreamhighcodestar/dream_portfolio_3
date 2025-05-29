
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
// import emailjs from 'emailjs-com';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';

// Define form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const recipientEmail = "asdsdduazusd@gmail.com";

  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_email: recipientEmail,
      subject: data.subject,
      message: data.message,
    };

    try {
      // Send email using EmailJS
      // Note: You need to replace these IDs with your own EmailJS account details
      
      // await emailjs.send(
      //   'service_7e4nssn', // Service ID
      //   'template_mpr7p7y', // Template ID
      //   templateParams,
      //   'lq7dfcwjVXRqdPJVQ' // Public Key
      // );

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message! I'll get back to you soon.",
      });

      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black/0 to-blue-900/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          <span className="text-blue-500">#</span> Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              I'm currently available for freelance work and interesting project collaborations. 
              Feel free to reach out if you have a project in mind or just want to connect!
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvnrQPwrwrZlMxMrFHkwBGgcnwSkkfsZnkwbKzbmglVRjfWTxvbQNMVBZMQsBXqLrZtPDq" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                  ivanfrilancan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Phone</h3>
                  <a href="tel:+380668488255" className="text-gray-400 hover:text-blue-400 transition-colors">
                    +380 66 848 82 55
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-400">
                    Nikopol, Ukraine
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="p-5 rounded-lg bg-gradient-to-r from-blue-900/30 to-purple-900/20 backdrop-blur-sm border border-blue-900/20">
                <h3 className="text-lg font-semibold text-white mb-3">References</h3>
                <div className="text-gray-400">
                  <p>Phone: +380 63 870 93 35</p>
                  <p>Email: asdfadsxduasd@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-blue-900/10 rounded-lg p-6 border border-blue-900/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Send me a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm text-gray-400">Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              placeholder="Your name" 
                              className="bg-blue-950/30 border-blue-900/30 text-white placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm text-gray-400">Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              type="email"
                              placeholder="Your email" 
                              className="bg-blue-950/30 border-blue-900/30 text-white placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm text-gray-400">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            placeholder="Subject" 
                            className="bg-blue-950/30 border-blue-900/30 text-white placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm text-gray-400">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            placeholder="Your message" 
                            rows={5} 
                            className="bg-blue-950/30 border-blue-900/30 text-white placeholder:text-gray-500 resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
