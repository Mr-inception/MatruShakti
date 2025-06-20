
import { Heart, BriefcaseMedical, MessageSquare, Shield, Calendar } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Health Assistant',
    description:
      'Get personalized health insights, nutrition tracking, and wellness recommendations tailored to your pregnancy journey.',
    icon: Heart,
  },
  {
    name: 'Government Scheme Integration',
    description:
      'Easily access and apply for maternal healthcare programs like Janani Suraksha Yojana (JSY) and Pradhan Mantri Matru Vandana Yojana (PMMVY).',
    icon: BriefcaseMedical,
  },
  {
    name: 'Pregnancy Support Community',
    description:
      'Connect with other expectant mothers and healthcare professionals in our secure, verified community forum.',
    icon: MessageSquare,
  },
  {
    name: 'Secure Medical Records',
    description:
      'Store and access your pregnancy-related medical records securely with controlled authorization for healthcare providers.',
    icon: Shield,
  },
  {
    name: 'Prenatal & Postpartum Care',
    description:
      'Comprehensive guidance through prenatal appointments, labor preparation, and postpartum recovery.',
    icon: Calendar,
  },
];

const FeatureSection = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-matru-primary uppercase tracking-wide">Features</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Comprehensive Maternal Support
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            MatruShakti combines advanced technology with government schemes to provide complete care for expectant mothers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="matru-card p-6 flex flex-col items-start hover:border-matru-primary hover:border transition-colors"
            >
              <div className="rounded-md bg-matru-primary/10 p-3 text-matru-primary">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
