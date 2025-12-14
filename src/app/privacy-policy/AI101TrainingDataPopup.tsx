import React from "react";

export default function AI101TrainingDataPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-dark-surface-secondary rounded-xl shadow-2xl max-w-md w-full p-6 relative">
        <button
          className="absolute top-3 right-3 text-lg text-gray-500 hover:text-navy-primary"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-2 text-navy-primary">AI 101: What is Training Data?</h2>
        <p className="mb-3 text-charcoal-text text-sm">
          <strong>Training data</strong> is the information used to teach an AI model how to respond, reason, and generate answers. Think of it like the textbooks and examples a student studies before taking a test.
        </p>
        <ul className="list-disc pl-5 mb-3 text-charcoal-text text-sm space-y-1">
          <li>Most modern AI models are trained on large, anonymized datasets from public sources.</li>
          <li><strong>When you use our services, your data is <span className="text-navy-primary">never used to train public models</span>.</strong></li>
          <li>We always turn off training data sharing when sending your data through public AI infrastructure.</li>
          <li>Your project data stays private and is not added to any public dataset.</li>
        </ul>
        <p className="text-xs text-text-secondary mt-2">
          If you have more questions about AI, privacy, or how your data is handled, just ask!
        </p>
      </div>
    </div>
  );
}
