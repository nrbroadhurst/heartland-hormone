import { appointmentPolicies } from "@/lib/pricing";

export function AppointmentPolicies() {
  const policy = appointmentPolicies;

  return (
    <div className="space-y-5 text-charcoal/90 leading-relaxed">
      <div>
        <p className="mb-2">{policy.labIntro}</p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-teal">
          <li>
            <span className="font-medium">{policy.preferredLabTitle}:</span>{" "}
            {policy.preferredLab}
          </li>
          <li>
            <span className="font-medium">{policy.discountedLabsTitle}:</span>{" "}
            {policy.discountedLabs}
          </li>
        </ul>
        <p className="mt-3">
          <span className="font-medium">Important:</span> {policy.timing}
        </p>
      </div>

      <div>
        <h3 className="font-display text-xl text-teal tracking-wide mb-1">
          {policy.confirmationTitle}
        </h3>
        <p>{policy.confirmation}</p>
      </div>

      <div>
        <h3 className="font-display text-xl text-teal tracking-wide mb-1">
          {policy.cancellationTitle}
        </h3>
        <p>{policy.cancellation}</p>
      </div>

      <div>
        <h3 className="font-display text-xl text-teal tracking-wide mb-1">
          {policy.cardTitle}
        </h3>
        <p>{policy.card}</p>
      </div>
    </div>
  );
}
