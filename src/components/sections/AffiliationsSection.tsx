import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Building2, Users } from 'lucide-react';

interface AffiliationGroupProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  delay: number;
}

const AffiliationGroup: React.FC<AffiliationGroupProps> = ({ title, items, icon, delay }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-soft border border-steel-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary-950">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-steel-700">
            <span className="w-2 h-2 bg-accent-500 rounded-full mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const AffiliationsSection: React.FC = () => {
  const affiliations = {
    memberships: [
      "Alberta Security Industry Association",
      "Canadian Security Association",
      "International Security Alliance",
      "Fort McMurray Chamber of Commerce"
    ],
    certifications: [
      "ISO 9001:2015 Certified",
      "Alberta Security License",
      "Emergency Response Certified",
      "Health & Safety Management Certified"
    ],
    clients: [
      "Northern Alberta Industries",
      "Fort McMurray Municipal Facilities",
      "Major Oil & Gas Companies",
      "Regional Shopping Centers"
    ],
    partners: [
      "Local Law Enforcement Agencies",
      "Emergency Response Teams",
      "Technology Solutions Providers",
      "Insurance Companies"
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
            Affiliations & Partnerships
          </h2>
          <p className="text-lg text-steel-600">
            Backed by industry-leading certifications and trusted by major organizations
            across Alberta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AffiliationGroup
            title="Memberships"
            items={affiliations.memberships}
            icon={<Shield className="h-6 w-6" />}
            delay={0}
          />
          <AffiliationGroup
            title="Certifications"
            items={affiliations.certifications}
            icon={<Award className="h-6 w-6" />}
            delay={0.1}
          />
          <AffiliationGroup
            title="Notable Clients"
            items={affiliations.clients}
            icon={<Building2 className="h-6 w-6" />}
            delay={0.2}
          />
          <AffiliationGroup
            title="Strategic Partners"
            items={affiliations.partners}
            icon={<Users className="h-6 w-6" />}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection;