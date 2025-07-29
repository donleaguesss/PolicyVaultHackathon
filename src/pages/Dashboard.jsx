import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NavbarDashboard from "../components/NavbarDashboard";
import Footer from "../components/Footer";
import PolicyCard from "../components/PolicyCard";
import NomineeCard from "../components/NomineeCard";
import PolicyForm from "../components/PolicyForm";
import NomineeForm from "../components/NomineeForm";
import { PolicyBarChart, PolicyPieChart } from "../components/AnalyticsChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Users,
  Bell,
  AlertTriangle,
  Plus,
  Search,
  Filter,
  UserPlus,
  FileText,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [policies, setPolicies] = useState([]);
  const [nominees, setNominees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [showNomineeModal, setShowNomineeModal] = useState(false);
  const [activeTab, setActiveTab] = useState("policies");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Mock data for charts
  const barChartData = [
    { name: "Term Life", value: 250000 },
    { name: "Whole Life", value: 500000 },
    { name: "Health", value: 100000 },
    { name: "Auto", value: 50000 },
    { name: "Home", value: 350000 },
  ];

  const pieChartData = [
    { name: "Term Life", value: 2 },
    { name: "Whole Life", value: 1 },
    { name: "Health", value: 1 },
    { name: "Auto", value: 1 },
    { name: "Home", value: 1 },
  ];

  // Mock policies data
  const mockPolicies = [
    {
      id: "POL-1234",
      name: "Term Life Insurance",
      company: "Prudential Insurance",
      value: 250000,
      premium: 45,
      startDate: "01/15/2022",
      endDate: "01/15/2032",
      nominees: 2,
      status: "Active",
    },
    {
      id: "POL-5678",
      name: "Whole Life Insurance",
      company: "MetLife Insurance",
      value: 500000,
      premium: 120,
      startDate: "03/22/2021",
      endDate: "03/22/2051",
      nominees: 3,
      status: "Active",
    },
    {
      id: "POL-9012",
      name: "Health Insurance",
      company: "Blue Cross Blue Shield",
      value: 100000,
      premium: 85,
      startDate: "05/10/2023",
      endDate: "05/10/2024",
      nominees: 1,
      status: "Pending",
    },
    {
      id: "POL-3456",
      name: "Auto Insurance",
      company: "State Farm Insurance",
      value: 50000,
      premium: 60,
      startDate: "07/03/2023",
      endDate: "07/03/2024",
      nominees: 1,
      status: "Active",
    },
    {
      id: "POL-7890",
      name: "Home Insurance",
      company: "Allstate Insurance",
      value: 350000,
      premium: 95,
      startDate: "09/18/2022",
      endDate: "09/18/2023",
      nominees: 2,
      status: "Renewal Due",
    },
  ];

  // Mock nominees data
  const mockNominees = [
    {
      id: "NOM-1234",
      name: "Sarah Johnson",
      relationship: "Spouse",
      email: "sarah@example.com",
      phone: "555-123-4567",
      policyId: "POL-1234",
      verified: true,
      status: "Active",
    },
    {
      id: "NOM-5678",
      name: "Michael Johnson",
      relationship: "Child",
      email: "michael@example.com",
      phone: "555-987-6543",
      policyId: "POL-1234",
      verified: false,
      status: "Active",
    },
    {
      id: "NOM-9012",
      name: "Emily Smith",
      relationship: "Parent",
      email: "emily@example.com",
      phone: "555-456-7890",
      policyId: "POL-5678",
      verified: true,
      status: "Active",
    },
    {
      id: "NOM-3456",
      name: "Robert Wilson",
      relationship: "Sibling",
      email: "robert@example.com",
      phone: "555-321-6547",
      policyId: "POL-5678",
      verified: false,
      status: "Active",
    },
  ];

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    // Simulate API fetch
    setTimeout(() => {
      setPolicies(mockPolicies);
      setNominees(mockNominees);
      setIsLoading(false);
    }, 1000);
  }, [isAuthenticated, navigate]);

  // Summary calculations
  const totalPolicies = policies.length;
  const activePolicies = policies.filter((p) => p.status === "Active").length;
  const totalNominees = nominees.length;
  const totalCoverage = policies.reduce((sum, policy) => sum + policy.value, 0);

  const handleAddPolicy = () => {
    setShowPolicyModal(true);
  };

  const handleAddNewPolicy = (newPolicy) => {
    setPolicies((prevPolicies) => [...prevPolicies, newPolicy]);
  };

  const handleAddNominee = () => {
    if (policies.length === 0) {
      toast.error("Please add at least one policy before adding nominees");
      return;
    }
    setShowNomineeModal(true);
  };

  const handleAddNewNominee = (newNominee) => {
    setNominees((prevNominees) => [...prevNominees, newNominee]);
  };

  const handleVerifyNominee = (nomineeId) => {
    setNominees((prevNominees) =>
      prevNominees.map((nominee) =>
        nominee.id === nomineeId ? { ...nominee, verified: true } : nominee
      )
    );
    toast.success("Verification email sent to nominee");
  };

  const getPolicyName = (policyId) => {
    const policy = policies.find((p) => p.id === policyId);
    return policy ? policy.name : "Unknown Policy";
  };

  const filteredPolicies = policies.filter((policy) => {
    const matchesSearch =
      policy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter ? policy.status === statusFilter : true;

    return matchesSearch && matchesStatus;
  });

  const filteredNominees = nominees.filter((nominee) => {
    const matchesSearch =
      nominee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nominee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nominee.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter
      ? (statusFilter === "Verified" && nominee.verified) ||
        (statusFilter === "Pending" && !nominee.verified)
      : true;

    return matchesSearch && matchesStatus;
  });

  if (!isAuthenticated) {
    return null; // Redirect happens in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <NavbarDashboard />

      <main className="flex-grow bg-blue-50 pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Welcome Header */}
          <div className="mb-8 animate-fade-up">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to PolicyVault, {user ? user.name : "User"}
            </h1>
            <p className="text-gray-600">
              A seamless way to manage and access your insurance policies
            </p>
          </div>

          {/* Quick Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-6 animate-fade-up">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Policies</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {totalPolicies}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-insurance-50">
                  <Shield className="h-6 w-6 text-insurance-600" />
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <span className="text-green-500 font-medium">
                  {activePolicies} active
                </span>{" "}
                policies
              </div>
            </Card>

            <Card
              className="p-6 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Nominees</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {totalNominees}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-insurance-50">
                  <Users className="h-6 w-6 text-insurance-600" />
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <Button
                  variant="link"
                  className="text-xs p-0 h-auto text-blue-500 font-medium"
                  onClick={handleAddNominee}
                >
                  Add more nominees
                </Button>
              </div>
            </Card>

            <Card
              className="p-6 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Coverage</p>
                  <p className="text-3xl font-bold text-gray-900">
                    ${totalCoverage.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-insurance-50">
                  <Shield className="h-6 w-6 text-insurance-600" />
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <span className="text-green-500 font-medium">Fully</span>{" "}
                protected
              </div>
            </Card>

            <Card
              className="p-6 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Notifications</p>
                  <p className="text-3xl font-bold text-gray-900">2</p>
                </div>
                <div className="p-3 rounded-full bg-insurance-50">
                  <Bell className="h-6 w-6 text-insurance-600" />
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <span className="text-amber-500 font-medium">2 pending</span>{" "}
                actions
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card
                className="p-6 hover:shadow-md transition-all cursor-pointer animate-fade-up"
                onClick={handleAddPolicy}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-full bg-insurance-50">
                    <FileText className="h-5 w-5 text-insurance-600" />
                  </div>
                  <span className="font-medium">Add New Policy</span>
                </div>
              </Card>

              <Card
                className="p-6 hover:shadow-md transition-all cursor-pointer animate-fade-up"
                onClick={handleAddNominee}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-full bg-insurance-50">
                    <UserPlus className="h-5 w-5 text-insurance-600" />
                  </div>
                  <span className="font-medium">Add Nominee</span>
                </div>
              </Card>

              <Card
                className="p-6 hover:shadow-md transition-all cursor-pointer animate-fade-up"
                onClick={() => {
                  const unverifiedNominees = nominees.filter(
                    (n) => !n.verified
                  );
                  if (unverifiedNominees.length === 0) {
                    toast.info("All nominees are already verified");
                    return;
                  }
                  unverifiedNominees.forEach((nominee) => {
                    handleVerifyNominee(nominee.id);
                  });
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-full bg-insurance-50">
                    <Users className="h-5 w-5 text-insurance-600" />
                  </div>
                  <span className="font-medium">Verify Nominees</span>
                </div>
              </Card>
            </div>
          </section>

          {/* Analytics Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Policy Analytics
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 animate-fade-up">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Policy Values
                </h3>
                <PolicyBarChart data={barChartData} />
              </Card>

              <Card
                className="p-6 animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Policy Distribution
                </h3>
                <PolicyPieChart data={pieChartData} />
              </Card>
            </div>
          </section>

          {/* Policies & Nominees Tabs */}
          <section>
            <div className="mb-6">
              <div className="flex border-b border-gray-200">
                <button
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === "policies"
                      ? "border-b-2 border-insurance-600 text-insurance-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("policies")}
                >
                  Policies
                </button>
                <button
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === "nominees"
                      ? "border-b-2 border-insurance-600 text-insurance-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("nominees")}
                >
                  Nominees
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeTab === "policies" ? "Your Policies" : "Your Nominees"}
              </h2>
              <Button
                className="bg-insurance-600 hover:bg-insurance-700 text-white"
                onClick={
                  activeTab === "policies" ? handleAddPolicy : handleAddNominee
                }
              >
                <Plus size={16} className="mr-2" />
                {activeTab === "policies"
                  ? "Add New Policy"
                  : "Add New Nominee"}
              </Button>
            </div>

            {/* Search and Filters */}
            <Card className="p-4 mb-6 animate-fade-up">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    type="search"
                    placeholder={`Search ${activeTab}...`}
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center">
                    <Filter size={16} className="mr-2" /> Filter
                  </Button>

                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="">
                      All {activeTab === "policies" ? "Policies" : "Nominees"}
                    </option>
                    {activeTab === "policies" ? (
                      <>
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Renewal Due">Renewal Due</option>
                      </>
                    ) : (
                      <>
                        <option value="Verified">Verified</option>
                        <option value="Pending">Pending Verification</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
            </Card>

            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Loading {activeTab}...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeTab === "policies" ? (
                  filteredPolicies.length > 0 ? (
                    filteredPolicies.map((policy) => (
                      <PolicyCard key={policy.id} policy={policy} />
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-12 bg-white rounded-lg border border-gray-200 animate-fade-up">
                      <div className="mx-auto w-16 h-16 bg-insurance-50 rounded-full flex items-center justify-center mb-4">
                        <AlertTriangle className="h-8 w-8 text-insurance-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No Policies Found
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {searchTerm || statusFilter
                          ? "No policies match your search criteria. Try adjusting your filters."
                          : "You haven't added any insurance policies yet. Start by adding your first policy."}
                      </p>
                      <Button
                        className="bg-insurance-600 hover:bg-insurance-700 text-white"
                        onClick={handleAddPolicy}
                      >
                        <Plus size={16} className="mr-2" /> Add Your First
                        Policy
                      </Button>
                    </div>
                  )
                ) : filteredNominees.length > 0 ? (
                  filteredNominees.map((nominee) => (
                    <NomineeCard
                      key={nominee.id}
                      nominee={nominee}
                      onVerify={handleVerifyNominee}
                      getPolicyName={getPolicyName}
                    />
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12 bg-white rounded-lg border border-gray-200 animate-fade-up">
                    <div className="mx-auto w-16 h-16 bg-insurance-50 rounded-full flex items-center justify-center mb-4">
                      <AlertTriangle className="h-8 w-8 text-insurance-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No Nominees Found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {searchTerm || statusFilter
                        ? "No nominees match your search criteria. Try adjusting your filters."
                        : "You haven't added any nominees yet. Start by adding your first nominee."}
                    </p>
                    <Button
                      className="bg-insurance-600 hover:bg-insurance-700 text-white"
                      onClick={handleAddNominee}
                      disabled={policies.length === 0}
                    >
                      <Plus size={16} className="mr-2" /> Add Your First Nominee
                    </Button>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Modals */}
      <Dialog open={showPolicyModal} onOpenChange={setShowPolicyModal}>
        <DialogContent className="sm:max-w-[700px] p-0">
          <PolicyForm
            onClose={() => setShowPolicyModal(false)}
            onAddPolicy={handleAddNewPolicy}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={showNomineeModal} onOpenChange={setShowNomineeModal}>
        <DialogContent className="sm:max-w-[700px] p-0">
          <NomineeForm
            onClose={() => setShowNomineeModal(false)}
            onAddNominee={handleAddNewNominee}
            policies={policies}
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Dashboard;
