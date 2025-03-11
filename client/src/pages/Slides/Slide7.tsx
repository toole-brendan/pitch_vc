import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  ModernBadge,
  ModernDivider,
  modernTypography,
  modernColors,
  fadeInVariants,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { PieChart, BarChart3, Briefcase, Target, LineChart, Workflow } from 'lucide-react';

const Slide7: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Market Opportunity" slideNumber={7} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="mb-10 text-center max-w-3xl mx-auto"
      >
        <h2 className={`${modernTypography.heading} mb-5`}>
          <span style={{ color: modernColors.military }}>Military</span> and <span style={{ color: modernColors.commercial }}>Commercial</span> Market Analysis
        </h2>
        <p className={`${modernTypography.body} text-center max-w-2xl mx-auto`}>
          TAM, SAM, and SOM analysis for <span style={{ color: modernColors.crypto }}>blockchain-powered</span> supply chain verification
        </p>
      </motion.div>

      {/* Market Size Analysis */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={0}
          className="md:col-span-3"
        >
          <ModernCard className="p-6" style={{
            borderBottom: `2px solid ${modernColors.accent}`,
            backgroundColor: `${modernColors.accent}05`
          }}>
            <div className="flex items-center gap-4 mb-4">
              <PieChart className="h-7 w-7" style={{ color: modernColors.accent }} />
              <h3 className={modernTypography.heading}>
                Market Size Analysis
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ 
                background: `linear-gradient(100deg, ${modernColors.accent}10, ${modernColors.accent}05)` 
              }}>
                <p className={`${modernTypography.subheading} font-bold mb-1`} style={{ color: modernColors.accent }}>
                  TAM: $120B
                </p>
                <p className={modernTypography.body}>
                  Total Addressable Market - Global blockchain supply chain market
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ 
                background: `linear-gradient(100deg, ${modernColors.military}10, ${modernColors.military}05, transparent)` 
              }}>
                <p className={`${modernTypography.subheading} font-bold mb-1`} style={{ color: modernColors.military }}>
                  SAM: $32B
                </p>
                <p className={modernTypography.body}>
                  Serviceable Available Market - U.S. <span style={{ color: modernColors.military }}>defense</span> & <span style={{ color: modernColors.commercial }}>enterprise</span> solutions
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ 
                background: `linear-gradient(100deg, ${modernColors.crypto}10, ${modernColors.crypto}05)` 
              }}>
                <p className={`${modernTypography.subheading} font-bold mb-1`} style={{ color: modernColors.crypto }}>
                  SOM: $750M
                </p>
                <p className={modernTypography.body}>
                  Serviceable Obtainable Market - Initial <span style={{ color: modernColors.military }}>defense</span> & contractor focus
                </p>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>

      {/* Defense and Commercial Markets */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={1}
        >
          <ModernCard className="h-full p-6 border-t-4" style={{
            borderColor: modernColors.military,
            backgroundColor: `${modernColors.militaryLight}15`
          }}>
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="h-7 w-7" style={{ color: modernColors.military }} />
              <ModernBadge color={modernColors.military}>
                DEFENSE MARKET
              </ModernBadge>
            </div>
            <p className={`${modernTypography.body} mb-3 font-semibold`} style={{ color: modernColors.military }}>
              Market Share: $48B (40%) - CAGR: 5.0% (2023-2028)
            </p>
            <h4 className={`${modernTypography.subheading} mb-2`} style={{ color: modernColors.military }}>
              Target Customers:
            </h4>
            <ul className={`${modernTypography.list} mb-4`}>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                <span>U.S. Army, Navy, Air Force, Marines units</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                <span>Defense Logistics Agency</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                <span>Military contractors and suppliers</span>
              </li>
            </ul>
            <h4 className={`${modernTypography.subheading} mb-2`} style={{ color: modernColors.military }}>
              Market Dynamics:
            </h4>
            <ul className={`${modernTypography.list}`}>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                <span>New DOGE 8% budget cut requirements</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                <span>$1.2B+ annual inventory loss pain point</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                <span>Audit compliance mandates by 2028</span>
              </li>
            </ul>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={2}
        >
          <ModernCard className="h-full p-6 border-t-4" style={{
            borderColor: modernColors.commercial,
            backgroundColor: `${modernColors.commercialLight}15`
          }}>
            <div className="flex items-center gap-4 mb-4">
              <BarChart3 className="h-7 w-7" style={{ color: modernColors.commercial }} />
              <ModernBadge color={modernColors.commercial}>
                COMMERCIAL MARKET
              </ModernBadge>
            </div>
            <p className={`${modernTypography.body} mb-3 font-semibold`} style={{ color: modernColors.commercial }}>
              Market Share: $72B (60%) - CAGR: 9.4% (2023-2028)
            </p>
            <h4 className={`${modernTypography.subheading} mb-2`} style={{ color: modernColors.commercial }}>
              Target Industries:
            </h4>
            <ul className={`${modernTypography.list} mb-4`}>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                <span>Aerospace and automotive manufacturing</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                <span>Pharmaceutical supply chains</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                <span>Electronics and high-value components</span>
              </li>
            </ul>
            <h4 className={`${modernTypography.subheading} mb-2`} style={{ color: modernColors.commercial }}>
              Growth Drivers:
            </h4>
            <ul className={`${modernTypography.list}`}>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                <span>60-90 day payment delays in current chains</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                <span>$950B+ annual inventory inaccuracy costs</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                <span>85% still using manual processes</span>
              </li>
            </ul>
          </ModernCard>
        </motion.div>
      </motion.div>

      {/* Market Entry Strategy */}
      <motion.div
        variants={itemFadeInUpVariant}
        custom={3}
      >
        <ModernCard className="p-6" style={{
          borderTop: `2px solid ${modernColors.military}`,
          borderBottom: `2px solid ${modernColors.commercial}`,
          backgroundColor: `${modernColors.crypto}05`
        }}>
          <div className="flex items-center gap-4 mb-4">
            <Workflow className="h-7 w-7" style={{ color: modernColors.crypto }} />
            <h3 className={modernTypography.heading}>
              Market Entry Strategy
            </h3>
          </div>
          <p className={`${modernTypography.body} mb-4`}>
            Our initial focus leverages the founder's <span style={{ color: modernColors.military }}>military expertise</span> to enter Defense logistics, building credibility and security validation as we expand into the higher-growth <span style={{ color: modernColors.commercial }}>commercial market</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 border rounded-lg" style={{ 
              borderColor: `${modernColors.military}40`,
              backgroundColor: `${modernColors.militaryLight}15` 
            }}>
              <h4 className={`${modernTypography.subheading} mb-2`} style={{ color: modernColors.military }}>
                Phase 1: Defense Pilots
              </h4>
              <ul className={`${modernTypography.list}`}>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <span>DoD units with DOGE mandates</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <span>Tier 1 defense contractors</span>
                </li>
              </ul>
            </div>
            <div className="p-3 border rounded-lg" style={{ 
              borderColor: `${modernColors.military}30`,
              backgroundColor: `${modernColors.militaryLight}10` 
            }}>
              <h4 className={`${modernTypography.subheading} mb-2`} style={{ color: modernColors.military }}>
                Phase 2: Defense Scale
              </h4>
              <ul className={`${modernTypography.list}`}>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <span>Expand across military branches</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <span>Add unit-level tracking</span>
                </li>
              </ul>
            </div>
            <div className="p-3 border rounded-lg" style={{ 
              borderColor: `${modernColors.commercial}40`,
              backgroundColor: `${modernColors.commercialLight}15` 
            }}>
              <h4 className={`${modernTypography.subheading} mb-2`} style={{ color: modernColors.commercial }}>
                Phase 3: Commercial
              </h4>
              <ul className={`${modernTypography.list}`}>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <span>Aerospace supply chains</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <span>Pharmaceutical tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </ModernCard>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide7;