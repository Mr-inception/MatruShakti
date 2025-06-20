
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BriefcaseMedical } from 'lucide-react';

// Scheme data
const schemes = [
  {
    id: 'jsy',
    name: 'Janani Suraksha Yojana (JSY)',
    description: 'A safe motherhood intervention under the National Rural Health Mission (NRHM) that promotes institutional delivery among pregnant women.',
    benefits: [
      'Cash assistance for institutional delivery',
      'Incentives for ASHA workers',
      'Support for transportation'
    ],
    eligibility: 'All pregnant women belonging to BPL households, SC, ST categories and women from rural areas.',
    documents: [
      'Aadhaar Card',
      'BPL Card (if applicable)',
      'Pregnancy Registration Certificate',
      'Bank Account Details'
    ],
    process: 'Register with your local ASHA worker or at the nearest health center. The ASHA worker will help you complete the necessary formalities.'
  },
  {
    id: 'pmmvy',
    name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    description: 'A maternity benefit program that provides partial compensation for wage loss and health care during pregnancy and after delivery.',
    benefits: [
      'Cash benefit of ₹5,000 in three installments',
      'Financial support for the first live birth',
      'Aimed at improving health-seeking behavior'
    ],
    eligibility: 'All pregnant and lactating women for the first live birth, except those who are in regular employment with the Government or PSUs.',
    documents: [
      'Aadhaar Card',
      'Bank Account Details',
      'Pregnancy Registration Certificate',
      'Identity Proof'
    ],
    process: 'Apply at the nearest Anganwadi Center. The application process requires three forms to be filled at different stages of pregnancy and after childbirth.'
  },
  {
    id: 'jssk',
    name: 'Janani Shishu Suraksha Karyakram (JSSK)',
    description: 'An initiative to provide completely free and cashless services to pregnant women and sick newborns.',
    benefits: [
      'Free delivery services',
      'Free drugs and consumables',
      'Free diagnostics and transport',
      'Free blood transfusion if needed'
    ],
    eligibility: 'All pregnant women delivering in public health institutions and sick newborns up to 30 days after birth.',
    documents: [
      'Proof of Identity',
      'Antenatal Care Card'
    ],
    process: 'No formal application required. Services are available at all government health institutions.'
  },
  {
    id: 'suman',
    name: 'Surakshit Matritva Aashwasan (SUMAN)',
    description: 'Aims to provide assured, dignified, respectful, and quality healthcare at no cost.',
    benefits: [
      'Zero expense delivery and C-section',
      'Free antenatal care',
      'Free postnatal care',
      'Free treatment for sick infants'
    ],
    eligibility: 'All pregnant women, mothers up to 6 months after delivery, and all sick newborns.',
    documents: [
      'Any government-issued ID',
      'Pregnancy confirmation'
    ],
    process: 'Visit your nearest government health facility to avail these services.'
  },
];

const GovernmentSchemes = () => {
  const [activeTab, setActiveTab] = useState('jsy');
  const [expandedScheme, setExpandedScheme] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <BriefcaseMedical className="h-10 w-10 text-matru-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold">Government Maternal Support Schemes</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Access financial assistance and healthcare benefits through these government initiatives for maternal welfare.
        </p>
      </div>

      <Tabs defaultValue="jsy" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-6">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4">
            {schemes.map((scheme) => (
              <TabsTrigger key={scheme.id} value={scheme.id} className="px-4 py-2">
                {scheme.id.toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {schemes.map((scheme) => (
          <TabsContent key={scheme.id} value={scheme.id} className="animate-fade-in">
            <Card className="border-matru-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-matru-secondary">{scheme.name}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {scheme.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-matru-primary mb-2">Benefits</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {scheme.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-700">{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-matru-primary mb-2">Eligibility</h4>
                    <p className="text-gray-700">{scheme.eligibility}</p>
                  </div>

                  {expandedScheme === scheme.id && (
                    <>
                      <div>
                        <h4 className="font-medium text-matru-primary mb-2">Required Documents</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {scheme.documents.map((doc, idx) => (
                            <li key={idx} className="text-gray-700">{doc}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-matru-primary mb-2">Application Process</h4>
                        <p className="text-gray-700">{scheme.process}</p>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  onClick={() => setExpandedScheme(expandedScheme === scheme.id ? null : scheme.id)}
                  className="w-full border-matru-primary text-matru-primary hover:bg-matru-primary/10"
                >
                  {expandedScheme === scheme.id ? 'Show Less' : 'Learn More'}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default GovernmentSchemes;
