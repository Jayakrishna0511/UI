import React, { useState, useEffect } from 'react';

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-500 flex items-center justify-center p-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #A55c2D 0%, #E79c09 50%, #FBB412 100%)'}}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{backgroundColor: '#8f8480'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" style={{backgroundColor: '#FBB412'}}></div>
        <div className="absolute top-3/4 left-3/4 w-96 h-96 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" style={{backgroundColor: '#36201B'}}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              width: i % 3 === 0 ? '16px' : i % 3 === 1 ? '12px' : '8px',
              height: i % 3 === 0 ? '16px' : i % 3 === 1 ? '12px' : '32px',
              backgroundColor: i % 5 === 0 ? '#8f8480' : i % 5 === 1 ? '#FBB412' : i % 5 === 2 ? '#36201B' : i % 5 === 3 ? '#A55c2D' : '#E79c09',
              opacity: 0.3,
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '4px' : '16px',
              transform: i % 3 === 1 ? 'rotate(45deg)' : 'none'
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Welcome card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-2xl mx-auto" style={{backgroundColor: 'rgba(54, 32, 27, 0.15)', borderColor: 'rgba(251, 180, 18, 0.3)'}}>
          
          {/* Avatar/Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full shadow-lg animate-pulse mb-4" style={{background: 'linear-gradient(135deg, #E79c09 0%, #FBB412 100%)'}}>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 rounded-full" style={{background: 'linear-gradient(135deg, #A55c2D 0%, #36201B 100%)'}}></div>
              </div>
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 animate-fade-in" style={{color: '#8f8480'}}>
              {getGreeting()}!
            </h2>
            <h1 className="text-6xl font-bold mb-4 animate-fade-in animation-delay-500" style={{color: '#36201B'}}>
              Welcome User
            </h1>
            <p className="text-xl animate-fade-in animation-delay-1000" style={{color: '#8f8480'}}>
              We're excited to have you here
            </p>
          </div>

          {/* Time display */}
          <div className="mb-8 animate-fade-in animation-delay-1500">
            <div className="inline-block backdrop-blur-sm rounded-xl px-6 py-3 border" style={{backgroundColor: 'rgba(251, 180, 18, 0.2)', borderColor: 'rgba(231, 156, 9, 0.4)'}}>
              <p className="text-sm mb-1" style={{color: '#8f8480'}}>Current Time</p>
              <p className="text-xl font-mono" style={{color: '#36201B'}}>{formatTime(currentTime)}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-2000">
            <button className="group relative overflow-hidden text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{background: 'linear-gradient(135deg, #A55c2D 0%, #E79c09 100%)'}}>
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(135deg, #E79c09 0%, #FBB412 100)'}}></div>
            </button>
            
            <button className="group relative overflow-hidden text-white px-8 py-3 rounded-xl font-semibold border backdrop-blur-sm transform hover:scale-105 transition-all duration-300" style={{backgroundColor: 'rgba(54, 32, 27, 0.3)', borderColor: 'rgba(251, 180, 18, 0.5)', color: '#FBB412'}}>
              <span className="relative z-10">Learn More</span>
            </button>
          </div>

          {/* Stats or features */}
          <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-in animation-delay-2500">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{color: '#36201B'}}>24/7</div>
              <div className="text-sm" style={{color: '#8f8480'}}>Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{color: '#36201B'}}>100%</div>
              <div className="text-sm" style={{color: '#8f8480'}}>Secure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{color: '#36201B'}}>∞</div>
              <div className="text-sm" style={{color: '#8f8480'}}>Possibilities</div>
            </div>
          </div>
        </div>

        {/* Decorative elements around the card */}
        <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full opacity-80 animate-pulse" style={{background: 'linear-gradient(135deg, #FBB412 0%, #E79c09 100%)'}}></div>
        <div className="absolute -top-6 -right-6 w-8 h-8 rounded-full opacity-80 animate-pulse animation-delay-1000" style={{background: 'linear-gradient(135deg, #A55c2D 0%, #36201B 100%)'}}></div>
        <div className="absolute -bottom-6 -left-6 w-10 h-10 rounded-full opacity-80 animate-pulse animation-delay-2000" style={{background: 'linear-gradient(135deg, #E79c09 0%, #A55c2D 100%)'}}></div>
        <div className="absolute -bottom-6 -right-6 w-6 h-6 rounded-full opacity-80 animate-pulse animation-delay-3000" style={{backgroundColor: '#8f8480'}}></div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-2500 {
          animation-delay: 2.5s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Welcome;