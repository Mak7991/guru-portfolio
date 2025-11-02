// Scroll Animation Utility
export const scrollAnimationStyles = {
  contentTop: {
    opacity: (isVisible) => isVisible ? 1 : 0,
    transform: (isVisible) => isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  contentMid: {
    opacity: (isVisible) => isVisible ? 1 : 0,
    transform: (isVisible) => isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
  }
};
