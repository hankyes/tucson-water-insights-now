
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, BarChart3, CloudRain, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Resilient Tucson Dashboard
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Snapshot of Tucson's readiness for the future -- and how you can help
          </p>
        </div>

        {/* Category Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center">
            Category
          </h2>
        </div>

        {/* Primary Water Security Grade Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="text-center py-12">
              <div className="flex items-center justify-center mb-6">
                <Droplets className="w-16 h-16 text-blue-500 mr-4" />
                <div className="text-8xl font-bold text-amber-500">B-</div>
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Overall Water Security
              </h2>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                Tucson's water security reflects moderate resilience with room for improvement. 
                Factors include reservoir levels, aquifer recharge rates, consumption patterns, 
                and climate forecast impacts on long-term sustainability.
              </p>
              <p className="text-sm text-slate-400">
                Data last updated: June 26, 2025
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Water Metrics Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Key Water Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1: CAP Reservoir Levels */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-slate-800">
                    Supply: Current CAP Reservoir Levels
                  </CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Good
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-600 mb-2">63%</div>
                <div className="text-lg font-medium text-slate-700 mb-3">Full</div>
                <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '63%' }}></div>
                </div>
                <p className="text-sm text-slate-600">
                  Crucial for Tucson's long-term water supply through managed aquifer recharge programs.
                </p>
              </CardContent>
            </Card>

            {/* Metric 2: Per Capita Consumption */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-slate-800">
                    Demand: Annual Consumption
                  </CardTitle>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                    Warning
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-amber-600 mb-2">146</div>
                <div className="text-lg font-medium text-slate-700 mb-3">GPCD</div>
                <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
                  <div className="bg-amber-500 h-3 rounded-full" style={{ width: '73%' }}></div>
                </div>
                <p className="text-sm text-slate-600">
                  Gallons per capita per day usage in 2015. Conservation efforts continue to reduce consumption.
                </p>
              </CardContent>
            </Card>

            {/* Metric 3: Rainfall Anomaly */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-slate-800">
                    Rainfall Anomaly (12 Months)
                  </CardTitle>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    Critical
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-red-600 mb-2">-5%</div>
                <div className="text-lg font-medium text-slate-700 mb-3">Below Average</div>
                <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <p className="text-sm text-slate-600">
                  Reduced precipitation impacts natural recharge and increases demand on stored water resources.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            What You Can Do to Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CTA 1: Home Water Audit */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Audit Your Home's Water Use
                </h3>
                <p className="text-slate-600 mb-6">
                  Discover simple ways to reduce your water footprint indoors and out with proven conservation techniques.
                </p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://www.youtube.com/watch?v=jaFlNxEvTOU', '_blank')}
                >
                  Watch Tutorials <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* CTA 2: Policy Engagement */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Share Your Voice on Water Policy
                </h3>
                <p className="text-slate-600 mb-6">
                  Participate in local government meetings and help shape Tucson's water future through civic engagement.
                </p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://www.tucsonaz.gov/files/sharedassets/public/v/1/clerks/documents/agenda-committee/mayorandcouncil_publicparticipation.pdf', '_blank')}
                >
                  Attend a Meeting <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* CTA 3: Sustainable Solutions */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Embrace Sustainable Solutions
                </h3>
                <p className="text-slate-600 mb-6">
                  Explore rainwater harvesting, greywater systems, and other innovative water reclamation technologies.
                </p>
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => window.open('https://watershedmg.org/get-involved', '_blank')}
                >
                  Volunteer Today <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* CTA 4: Order Free Water Saving Kit */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Order Free Water Saving Kit
                </h3>
                <p className="text-slate-600 mb-6">
                  A free kit for individuals to save water provided by Tucson Water & Environmental Education Exchange, a nonprofit 501(c)(3).
                </p>
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => window.open('https://www.eeexchange.org/twconserve', '_blank')}
                >
                  Order Free Kit <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 max-w-4xl mx-auto border-t border-slate-200 pt-8">
          <p className="mb-2">
            <strong>Disclaimer:</strong> Data presented is for conceptual demonstration only and may not reflect current real-time conditions. 
            Consult official city and state resources for definitive information.
          </p>
          <p className="mb-4">
            Built as a learning project to promote water awareness and community engagement in Tucson, AZ.
          </p>
          <p className="text-xs text-slate-400">
            Framework: <a 
              href="https://resilientcitiesnetwork.org/downloadable_resources/Publications/City%20Resilience%20Framework%2024%20FINAL_.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              City Resilience Framework
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
