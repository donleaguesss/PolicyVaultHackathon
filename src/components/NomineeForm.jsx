
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { UserPlus, X } from 'lucide-react';
import { toast } from 'sonner';
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  relationship: z.string().min(2, "Relationship must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  policyId: z.string().min(1, "Please select a policy"),
});

const NomineeForm = ({ onClose, onAddNominee, policies }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      relationship: "",
      email: "",
      phone: "",
      policyId: policies.length > 0 ? policies[0].id : "",
    },
  });

  const onSubmit = (data) => {
    // Generate nominee ID
    const nomineeId = 'NOM-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    
    // Create new nominee object
    const newNominee = {
      id: nomineeId,
      name: data.name,
      relationship: data.relationship,
      email: data.email,
      phone: data.phone,
      policyId: data.policyId,
      status: 'Active',
      verified: false,
    };
    
    // Add nominee via callback
    onAddNominee(newNominee);
    toast.success(`Nominee ${data.name} added successfully`);
    onClose();
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-full bg-insurance-50">
            <UserPlus className="h-6 w-6 text-insurance-600" />
          </div>
          <h2 className="text-xl font-bold">Add New Nominee</h2>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nominee Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="relationship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relationship</FormLabel>
                  <FormControl>
                    <Input placeholder="Spouse, Child, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="nominee@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="policyId"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Select Policy</FormLabel>
                  <FormControl>
                    <select 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    >
                      {policies.length > 0 ? (
                        policies.map(policy => (
                          <option key={policy.id} value={policy.id}>
                            {policy.name} - {policy.id}
                          </option>
                        ))
                      ) : (
                        <option value="" disabled>No policies available</option>
                      )}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <Button 
              variant="outline" 
              type="button"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-insurance-600 hover:bg-insurance-700 text-white"
              disabled={policies.length === 0}
            >
              Add Nominee
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default NomineeForm;
