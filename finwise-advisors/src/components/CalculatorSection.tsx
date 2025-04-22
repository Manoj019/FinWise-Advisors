import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const CalculatorSection: React.FC = () => {
  const [calculatorType, setCalculatorType] = useState<'retirement' | 'savings'>('retirement');
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [currentSavings, setCurrentSavings] = useState<number>(50000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [interestRate, setInterestRate] = useState<number>(7);
  
  // Simple calculation for demonstration
  const calculateRetirementSavings = (): number => {
    const years = retirementAge - currentAge;
    const monthlyRate = interestRate / 100 / 12;
    const months = years * 12;
    
    // Future value of current savings
    const futureValueCurrentSavings = currentSavings * Math.pow(1 + monthlyRate, months);
    
    // Future value of monthly contributions
    let futureValueContributions = 0;
    if (monthlyRate > 0) {
      futureValueContributions = 
        monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    } else {
      futureValueContributions = monthlyContribution * months;
    }
    
    return Math.round(futureValueCurrentSavings + futureValueContributions);
  };
  
  const formattedResult = calculateRetirementSavings().toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6">
              <Calculator className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Financial Tools</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Plan your future with our financial calculators
            </h2>
            <p className="text-gray-600 mb-8">
              Use our interactive calculators to get a clearer picture of your financial situation 
              and make more informed decisions about your future.
            </p>
            <div className="flex space-x-4 mb-8">
              <button 
                className={`px-5 py-2 rounded-md ${
                  calculatorType === 'retirement' 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
                onClick={() => setCalculatorType('retirement')}
              >
                Retirement
              </button>
              <button 
                className={`px-5 py-2 rounded-md ${
                  calculatorType === 'savings' 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
                onClick={() => setCalculatorType('savings')}
              >
                Savings
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="currentAge" className="text-gray-700 font-medium">
                  Current Age
                </label>
                <span className="text-gray-900 font-semibold">{currentAge} years</span>
              </div>
              <input
                type="range"
                id="currentAge"
                min="18"
                max="70"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="retirementAge" className="text-gray-700 font-medium">
                  Retirement Age
                </label>
                <span className="text-gray-900 font-semibold">{retirementAge} years</span>
              </div>
              <input
                type="range"
                id="retirementAge"
                min="50"
                max="75"
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="currentSavings" className="text-gray-700 font-medium">
                  Current Savings
                </label>
                <span className="text-gray-900 font-semibold">
                  ${currentSavings.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                id="currentSavings"
                min="0"
                max="500000"
                step="5000"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="monthlyContribution" className="text-gray-700 font-medium">
                  Monthly Contribution
                </label>
                <span className="text-gray-900 font-semibold">
                  ${monthlyContribution}
                </span>
              </div>
              <input
                type="range"
                id="monthlyContribution"
                min="100"
                max="2000"
                step="50"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="interestRate" className="text-gray-700 font-medium">
                  Expected Annual Return
                </label>
                <span className="text-gray-900 font-semibold">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                id="interestRate"
                min="1"
                max="12"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center">
              <h3 className="text-gray-700 mb-2">Estimated Retirement Savings</h3>
              <p className="text-3xl font-bold text-blue-900">{formattedResult}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;