import { AddressBlock } from "@/components/AddressBlock";
import { EmailLink } from "@/components/EmailLink";
import {
  PHONE,
  PORTAL_URL,
  SITE,
  hasEmail,
  hasPhone,
  phoneHref,
} from "@/lib/site";

export function PatientFlowGuide() {
  return (
    <div id="using-the-website" className="scroll-mt-28 space-y-10">
      <p className="text-charcoal/90 leading-relaxed max-w-3xl">
        This website is for information and to get you into the right place. It
        does not store your medical records. Scheduling, forms, messages, and
        bills live in OptiMantra, our secure patient system.
      </p>

      <div className="space-y-4">
        <h3 className="font-display text-2xl text-teal tracking-wide">
          New patients
        </h3>
        <ol className="list-decimal space-y-3 pl-5 text-charcoal/90 leading-relaxed">
          <li>
            Choose <span className="font-medium">Book a Consultation</span> on
            this website, or call{" "}
            {hasPhone() ? (
              <a
                href={phoneHref() ?? `tel:${SITE.phone}`}
                className="text-teal underline underline-offset-2"
              >
                {PHONE}
              </a>
            ) : (
              "the clinic"
            )}
            .
          </li>
          <li>
            That opens OptiMantra. Select your visit type and an available time.
          </li>
          <li>
            After you book, you will receive an email invite to the patient
            portal. Use that invite to set your password. There is no
            &quot;create account&quot; button on this website.
          </li>
          <li>
            Complete any forms in the portal. Laboratory testing should be
            finished at least 3-4 business days before your first visit so
            results are ready when we meet.
          </li>
          <li>
            New patient visits are typically 60 minutes and are by appointment
            only.
            <div className="mt-2 text-sm">
              <AddressBlock />
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-4">
        <h3 className="font-display text-2xl text-teal tracking-wide">
          Existing patients
        </h3>
        <ol className="list-decimal space-y-3 pl-5 text-charcoal/90 leading-relaxed">
          <li>
            Choose{" "}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal underline underline-offset-2"
            >
              Patient Access
            </a>. That opens the OptiMantra patient login in a new tab.
          </li>
          <li>
            Sign in as a patient. Use the email the portal invite was sent to,
            and the password you created when you opened that invite. This is
            the patient login, not a staff login.
          </li>
          <li>
            Once you are signed in, you can complete forms, view documents and
            invoices, and send a message to the clinic.
          </li>
          <li>
            Book follow-up visits in OptiMantra or call the clinic. Follow-ups
            are typically 30 minutes.
          </li>
        </ol>
      </div>

      <div className="space-y-4">
        <h3 className="font-display text-2xl text-teal tracking-wide">
          Questions that are not medical
        </h3>
        <p className="text-charcoal/90 leading-relaxed">
          Call{" "}
          {hasPhone() ? (
            <a
              href={phoneHref() ?? `tel:${SITE.phone}`}
              className="text-teal underline underline-offset-2"
            >
              {PHONE}
            </a>
          ) : (
            "the clinic"
          )}
          {hasEmail() ? (
            <>
              , or use the clinic email: <EmailLink />.
            </>
          ) : (
            "."
          )}{" "}
          There is no message form on this website. Please do not send symptoms,
          medications, or lab results by email. Use the portal after you are a
          patient, or discuss them at your visit.
        </p>
      </div>
    </div>
  );
}
