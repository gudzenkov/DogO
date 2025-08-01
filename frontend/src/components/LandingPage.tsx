const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Header */}
      <nav className="absolute top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐕</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">DogO</div>
                <div className="text-xs text-gray-500 -mt-1">Training Platform</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/40">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm border border-indigo-200/50 rounded-full px-6 py-3 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ dog owners</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Dog's
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent block">
                Behavior Today
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Connect with professional trainers for personalized online obedience training. 
              <span className="text-indigo-600 font-medium">Track progress</span>, get expert feedback, and build a stronger bond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:-translate-y-0.5">
                Start Training Now
              </button>
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-indigo-600 border-2 border-indigo-200 hover:border-indigo-300 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5">
                I'm a Trainer
              </button>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
              <div className="relative h-80 md:h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-6 animate-bounce">🐕</div>
                  <h3 className="text-2xl font-bold mb-2">Professional Training Sessions</h3>
                  <p className="text-indigo-100 text-lg">Real results, real progress</p>
                </div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">92%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                Successful Training
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform provides comprehensive tools designed for both dog owners and professional trainers
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-100 rounded-2xl p-2 inline-flex">
              <button className="px-8 py-3 rounded-xl bg-white shadow-lg text-indigo-600 font-semibold">
                For Dog Owners
              </button>
              <button className="px-8 py-3 rounded-xl text-gray-600 font-semibold hover:text-gray-900">
                For Trainers
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-full transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📚</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Structured Lessons</h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Access professionally designed lessons organized by difficulty and training goals with video tutorials
                </p>
                <div className="mt-6 text-indigo-600 font-semibold">
                  Learn more →
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 h-full transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📊</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Progress Tracking</h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Record training sessions, track success rates, and monitor your dog's improvement with detailed analytics
                </p>
                <div className="mt-6 text-emerald-600 font-semibold">
                  Learn more →
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 h-full transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💬</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Expert Feedback</h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Get personalized guidance and tips from professional trainers based on your specific progress and challenges
                </p>
                <div className="mt-6 text-purple-600 font-semibold">
                  Learn more →
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Dogs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">92%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How DogO Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to transform your dog's behavior with expert guidance
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Lines */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 hidden md:block"></div>
            
            <div className="text-center relative z-10">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Sign Up</h4>
                <p className="text-gray-600">Create your account and set up your dog's profile with breed, age, and current behavior</p>
              </div>
            </div>
            
            <div className="text-center relative z-10">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Choose Lessons</h4>
                <p className="text-gray-600">Browse professionally designed lessons tailored to your dog's needs and training level</p>
              </div>
            </div>
            
            <div className="text-center relative z-10">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Train & Track</h4>
                <p className="text-gray-600">Follow video lessons and record your training sessions with detailed progress notes</p>
              </div>
            </div>
            
            <div className="text-center relative z-10">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Get Feedback</h4>
                <p className="text-gray-600">Receive personalized guidance and tips from expert trainers based on your progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/90 to-purple-800/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your Dog's
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              Training Journey?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of dog owners who have transformed their pets' behavior with professional guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white hover:bg-gray-50 text-indigo-600 px-10 py-4 rounded-full text-lg font-bold shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
              Start Free Training
            </button>
            <button className="border-2 border-white/50 backdrop-blur-sm hover:bg-white hover:text-indigo-600 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:shadow-lg hover:-translate-y-0.5">
              Become a Trainer
            </button>
          </div>
          
          <div className="mt-16 flex justify-center items-center space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free 7-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No commitment</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-purple-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🐕</span>
                </div>
                <div>
                  <div className="text-3xl font-bold">DogO</div>
                  <div className="text-sm text-gray-400">Training Platform</div>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Professional dog training made accessible for everyone. Transform your dog's behavior with expert guidance and structured learning.
              </p>
              <div className="flex space-x-4 mt-6">
                <div className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-sm">ig</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-white">For Owners</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center space-x-2">
                  <span>📚</span><span>Browse Lessons</span>
                </a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center space-x-2">
                  <span>📊</span><span>Track Progress</span>
                </a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center space-x-2">
                  <span>👨‍🏫</span><span>Find Trainers</span>
                </a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center space-x-2">
                  <span>🎯</span><span>Set Goals</span>
                </a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-white">Resources</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Training Tips</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2025 DogO Training Platform. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage