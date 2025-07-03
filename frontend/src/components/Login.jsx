import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // ✅ Use navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (email && password) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Login successful! Welcome back!');
      navigate('/welcome'); // ✅ Redirect to Welcome
    } else {
      alert('Please fill in both fields');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #A55c2D 0%, #E79c09 50%, #FBB412 100%)' }}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 opacity-15 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ backgroundColor: '#36201B' }}></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 opacity-15 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" style={{ backgroundColor: '#FBB412' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 opacity-15 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" style={{ backgroundColor: '#E79c09' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              backgroundColor: i % 4 === 0 ? '#36201B' : i % 4 === 1 ? '#FBB412' : i % 4 === 2 ? '#E79c09' : '#A55c2D',
              opacity: 0.4
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-lg rounded-3xl p-8 shadow-2xl border transform hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: 'rgba(54, 32, 27, 0.15)', borderColor: 'rgba(251, 180, 18, 0.3)' }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg animate-pulse" style={{ background: 'linear-gradient(135deg, #E79c09 0%, #FBB412 100%)' }}>
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold mb-2 animate-fade-in" style={{ color: '#36201B' }}>Welcome Back</h2>
            <p className="text-sm animate-fade-in animation-delay-500" style={{ color: '#A55c2D' }}>Sign in to your account</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 placeholder-opacity-70"
                  style={{
                    backgroundColor: 'rgba(251, 180, 18, 0.1)',
                    borderColor: 'rgba(231, 156, 9, 0.3)',
                    color: '#36201B'
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ background: 'linear-gradient(135deg, rgba(231, 156, 9, 0.2) 0%, rgba(251, 180, 18, 0.2) 100%)' }}></div>
              </div>

              <div className="relative group">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 placeholder-opacity-70"
                  style={{
                    backgroundColor: 'rgba(251, 180, 18, 0.1)',
                    borderColor: 'rgba(231, 156, 9, 0.3)',
                    color: '#36201B'
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ background: 'linear-gradient(135deg, rgba(231, 156, 9, 0.2) 0%, rgba(251, 180, 18, 0.2) 100%)' }}></div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative overflow-hidden text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
              style={{ background: 'linear-gradient(135deg, #A55c2D 0%, #E79c09 100%)' }}
            >
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #E79c09 0%, #FBB412 100%)' }}></div>
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: '#A55c2D' }}>
              Don't have an account?{' '}
              <a href="#" className="transition-colors duration-300 font-semibold" style={{ color: '#36201B' }}>
                Sign up
              </a>
            </p>
          </div>
        </form>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-60 animate-pulse" style={{ background: 'linear-gradient(135deg, #FBB412 0%, #E79c09 100%)' }}></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-60 animate-pulse animation-delay-1000" style={{ background: 'linear-gradient(135deg, #A55c2D 0%, #36201B 100%)' }}></div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
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

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Login;
