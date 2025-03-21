import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge, 
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';

const Slide2: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout 
      title="Founder Background" 
      subtitle="Military experience and financial expertise informing product development"
      slideNumber={2} 
      totalSlides={TOTAL_SLIDES}
    >
      <div className="flex flex-col items-center justify-center h-[calc(100vh-220px)]">
        <div className="flex flex-col gap-4 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ModernCard className="h-full p-5">
                <ModernBadge color={modernColors.crypto}>Founder Profile</ModernBadge>
                <h3 className={`${modernTypography.subheading} mt-3 mb-2 text-xl`} style={{ color: modernColors.text }}>
                  Brendan Toole
                </h3>
                <p className={`${modernTypography.body} font-semibold mb-2 text-sm`}>
                  FOUNDER & CEO
                </p>
                <ul className={`${modernTypography.body} space-y-1.5 text-sm`}>
                  <li>Research Analyst, <span style={{ color: modernColors.commercial }}>Point72 Asset Management</span></li>
                  <li>Platoon Leader, <span style={{ color: modernColors.military }}>101st Airborne Division</span></li>
                  <li>Princeton University, Economics A.B.</li>
                </ul>
              </ModernCard>
            </div>

            <div>
              <ModernCard className="h-full p-5">
                <ModernBadge color={modernColors.crypto}>Vision</ModernBadge>
                <h3 className={`${modernTypography.subheading} mt-3 mb-2 text-xl`} style={{ color: modernColors.text }}>
                  Military logistics meets financial expertise
                </h3>
                <p className={`${modernTypography.body} text-sm`}>
                  Building a <span style={{ color: modernColors.crypto }}>blockchain-powered</span> inventory and supply chain management solution that streamlines property tracking and transfers.
                </p>
                <p className={`${modernTypography.body} mt-2 text-sm`}>
                  HandReceipt represents the convergence of <span style={{ color: modernColors.military }}>military-grade validation</span> adapted for <span style={{ color: modernColors.commercial }}>commercial markets</span>.
                </p>
              </ModernCard>
            </div>
          </div>

          <div>
            <ModernCard className="p-5 border shadow-sm" style={{ background: 'linear-gradient(120deg, rgba(219,234,254,0.3), rgba(255,237,213,0.3))' }}>
              <h3 className={`${modernTypography.subheading} mb-3 text-xl`} style={{ color: modernColors.text }}>
                Origin Story
              </h3>
              <div className={`${modernTypography.body} space-y-3 text-sm`}>
                <p style={{ borderLeft: `3px solid ${modernColors.military}`, paddingLeft: '1rem' }}>
                  <strong style={{ color: modernColors.military }}>Military Experience:</strong> As a Platoon Leader in the 101st Airborne Division, I witnessed the inefficiencies of paper-based supply tracking systems.
                </p>
                <p style={{ borderLeft: `3px solid ${modernColors.commercial}`, paddingLeft: '1rem' }}>
                  <strong style={{ color: modernColors.commercial }}>Financial Insight:</strong> At Point72, I analyzed supply chain dynamics across multiple sectors, recognizing a market opportunity.
                </p>
              </div>
            </ModernCard>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide2;
