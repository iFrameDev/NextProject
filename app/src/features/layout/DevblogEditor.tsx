"use client"

import React from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button';

import EditorQuill from './quillEditor';

export default function DevblogEditor() {
    const [editorData, setEditorData] = React.useState<string>('');

  return (

    <div className='flex flex-col gap-4 mt-4'>
        <div><h2 className='border-b border-b-accent font-bold text-2xl'>Editeur de devblog</h2></div>
        <div className='flex flex-col gap-4  p-5'>

            
            <div>
                <Label>Titre du devblog</Label>
                <Input></Input>
            </div>
            <div>
                <Label>Description</Label>
                <Input></Input>
            </div>

        </div>

        <div><h2 className='border-b border-b-accent font-bold m-4'>Sous Système</h2></div>

        <div className='flex flex-col border border-b-accent p-5 gap-4 m-4'>

            <div>
                <Label>Titre du systeme</Label>
                <Input></Input>
            </div>
            <div>
                <Label>Auteur</Label>
                <Input></Input>
            </div>
            <div>
                <Label>Branche du systeme</Label>
                <Select>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label>Descripton du systeme</Label>
                <EditorQuill/>
     
            </div>
            <div className='flex justify-end'>
                <Button >Add</Button>
            </div>
        </div>

        
        <div><Button>Prévisualiser</Button>
        <Button>Envoyer le devblog</Button></div>
        
    </div>
  )
}
//<Editor initialData='<h1>Hello from CKEditor in Next.js!</h1>'/>