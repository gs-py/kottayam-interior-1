import { Seo } from '@/components/shared/Seo'
import { PageBanner } from '@/components/shared/PageBanner'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Contact as ContactSection } from '@/components/sections/Contact'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/data/faqs'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Kottayam Interiors — Book a Free Consultation"
        description="Get in touch with Kottayam Interiors for interior design, building materials, and installation in Kottayam, Kerala. Call, WhatsApp, or visit our showroom."
        path="/contact"
      />
      <PageBanner
        eyebrow="Contact"
        title="Let’s build something beautiful"
        subtitle="Call, message, or visit — we’d love to hear about your project."
        image="photo-1497366811353-6870744d04b2"
        crumbs={[{ label: 'Contact' }]}
      />

      <ContactSection />

      {/* FAQ */}
      <section className="section-padding bg-graphite/30">
        <div className="container">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            subtitle="Everything you need to know before getting started."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
