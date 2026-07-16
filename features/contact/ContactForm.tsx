'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { CyberButton } from '@/components/ui/CyberButton'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Le nom doit faire au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(3, 'Le sujet est requis'),
  message: z.string().min(20, 'Le message doit faire au moins 20 caractères'),
})

type FormData = z.infer<typeof schema>

const inputBase =
  'w-full bg-surface border px-4 py-3 text-sm text-foreground placeholder:text-ghost focus:outline-none transition-colors'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-12 border border-primary/30 bg-primary/5 text-center clip-cyber">
        <CheckCircle size={44} className="text-primary mb-4" />
        <h3 className="font-extrabold text-foreground text-lg uppercase tracking-tight">
          Message envoyé !
        </h3>
        <p className="text-dim mt-2 text-sm">Je vous répondrai dans les 24 heures.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-5 text-xs text-primary underline underline-offset-2 hover:text-foreground transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-dim uppercase tracking-wider mb-1.5">
            Nom *
          </label>
          <input
            {...register('name')}
            placeholder="Jean Dupont"
            className={cn(
              inputBase,
              errors.name ? 'border-red-500/70 focus:border-red-500' : 'border-wire focus:border-primary'
            )}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold text-dim uppercase tracking-wider mb-1.5">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="jean@example.com"
            className={cn(
              inputBase,
              errors.email ? 'border-red-500/70 focus:border-red-500' : 'border-wire focus:border-primary'
            )}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-bold text-dim uppercase tracking-wider mb-1.5">
          Sujet *
        </label>
        <input
          {...register('subject')}
          placeholder="Mission freelance · Recrutement · Collaboration"
          className={cn(
            inputBase,
            errors.subject ? 'border-red-500/70 focus:border-red-500' : 'border-wire focus:border-primary'
          )}
        />
        {errors.subject && (
          <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-dim uppercase tracking-wider mb-1.5">
          Message *
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Décrivez votre projet, votre besoin ou votre proposition..."
          className={cn(
            inputBase,
            'resize-none',
            errors.message ? 'border-red-500/70 focus:border-red-500' : 'border-wire focus:border-primary'
          )}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-xs border border-red-500/30 bg-red-500/5 p-3">
          <AlertCircle size={14} />
          Une erreur s'est produite. Veuillez réessayer ou m'écrire directement.
        </div>
      )}

      <CyberButton
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send size={15} />
            Envoyer le message
          </>
        )}
      </CyberButton>
    </form>
  )
}
