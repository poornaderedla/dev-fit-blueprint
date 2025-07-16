
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Target, Users, TrendingUp, Award } from "lucide-react";

interface AssessmentHeroProps {
  onStartAssessment: () => void;
}

const AssessmentHero = ({ onStartAssessment }: AssessmentHeroProps) => {
  const modules = [
    {
      icon: Target,
      title: "Test Introduction",
      description: "Understanding Full Stack .NET development and career paths"
    },
    {
      icon: Brain,
      title: "Psychometric Section",
      description: "Personality fit, cognitive style, and motivation assessment"
    },
    {
      icon: Code,
      title: "Technical & Aptitude",
      description: "Programming skills, C#/.NET knowledge, and problem-solving"
    },
    {
      icon: TrendingUp,
      title: "WISCAR Framework",
      description: "Multi-dimensional readiness analysis"
    },
    {
      icon: Award,
      title: "Recommendation Engine",
      description: "AI-generated personalized career guidance"
    },
    {
      icon: Users,
      title: "Career Guidance",
      description: "Learning paths and skill development roadmap"
    }
  ];

  const roles = [
    ".NET Full Stack Developer",
    "ASP.NET Core Developer", 
    "Software Engineer (C#/.NET)",
    "Backend Developer (C#)",
    "Cloud Developer (.NET on Azure)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            ⚙️ TECHNICAL FUTURES
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Should You Learn Full Stack .NET?
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A Psychometric, Technical, and Career Fit Assessment for Aspiring Full Stack .NET Developers
          </p>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16">
          <Button 
            onClick={onStartAssessment}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Start Assessment
          </Button>
          <p className="text-gray-500 mt-4">25-30 minutes • Personalized Results • No Registration Required</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((module, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <module.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {index + 1}
                  </Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What is Full Stack .NET? */}
        <Card className="mb-16 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">💡 What is Full Stack .NET?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">Frontend</h3>
                <p className="text-gray-600 text-sm">HTML, CSS, JavaScript/TypeScript, Blazor/React/Angular</p>
              </div>
              <div>
                <h3 className="font-semibold text-green-600 mb-2">Backend</h3>
                <p className="text-gray-600 text-sm">ASP.NET Core (C#)</p>
              </div>
              <div>
                <h3 className="font-semibold text-purple-600 mb-2">Database</h3>
                <p className="text-gray-600 text-sm">MS SQL Server / Entity Framework</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-600 mb-2">DevOps/Hosting</h3>
                <p className="text-gray-600 text-sm">Azure, IIS, Docker</p>
              </div>
            </div>
            <p className="text-gray-600 mt-6">
              Enterprise-focused, known for robust architecture, enterprise-level security, and scalable solutions.
            </p>
          </CardContent>
        </Card>

        {/* Career Roles */}
        <Card className="mb-16 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">💼 Typical Career Roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roles.map((role, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-800">{role}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ideal Traits */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🧠 Ideal Traits & Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Logical and structured thinking</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Discipline and code hygiene</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Long-term project focus</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Curiosity in systems design</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Backend workflow interest</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Patience with enterprise systems</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentHero;
