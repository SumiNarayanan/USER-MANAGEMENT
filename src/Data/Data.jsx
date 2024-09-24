// const menuData = {
//     company1: {
//       admin: [
//         { label: 'Dashboard', link: '/dashboard', submenus: ['Overview', 'Stats', 'Reports'] },
//         { label: 'Users', link: '/users', submenus: ['Add User', 'Manage Users'] },
//       ],
//       user: [
//         { label: 'Dashboard', link: '/dashboard', submenus: ['Overview', 'Personal Stats'] },
//         { label: 'Profile', link: '/profile', submenus: ['Edit Profile', 'View Profile'] },
//       ],
//     },
//     company2: {
//       admin: [
//         { label: 'Admin Panel', link: '/admin', submenus: ['Settings', 'Manage Roles'] },
//         { label: 'Reports', link: '/reports', submenus: ['Sales', 'Revenue'] },
//       ],
//       user: [
//         { label: 'Dashboard', link: '/dashboard', submenus: ['User Overview', 'Progress'] },
//         { label: 'Support', link: '/support', submenus: ['FAQs', 'Contact Us'] },
//       ],
//     },
//   };
  
//   export default menuData;
const menuData = {
    company1: {
      admin: [
        { label: 'Dashboard', link: '/dashboard', submenus: ['Overview', 'Stats', 'Reports'] },
        { label: 'Users', link: '/users', submenus: ['Add User', 'Manage Users', 'Delete Users'] },
        { label: 'Settings', link: '/settings', submenus: ['General', 'Security', 'Notifications'] },
        { label: 'Analytics', link: '/analytics', submenus: ['Performance', 'Trends', 'Reports'] },
      ],
      user: [
        { label: 'Dashboard', link: '/dashboard', submenus: ['Overview', 'Personal Stats'] },
        { label: 'Profile', link: '/profile', submenus: ['Edit Profile', 'View Profile'] },
        { label: 'Support', link: '/support', submenus: ['FAQs', 'Contact Support'] },
      ],
    },
    company2: {
      admin: [
        { label: 'Admin Panel', link: '/admin', submenus: ['Settings', 'Manage Roles', 'Permissions'] },
        { label: 'Reports', link: '/reports', submenus: ['Sales', 'Revenue', 'Expenses'] },
        { label: 'Users', link: '/users', submenus: ['Add User', 'Manage Users', 'Activity Logs'] },
        { label: 'Integrations', link: '/integrations', submenus: ['API Settings', 'Webhooks'] },
      ],
      user: [
        { label: 'Dashboard', link: '/dashboard', submenus: ['User Overview', 'Progress'] },
        { label: 'Support', link: '/support', submenus: ['FAQs', 'Contact Us'] },
        { label: 'Training', link: '/training', submenus: ['Video Tutorials', 'Documentation'] },
      ],
    },
    company3: {
      admin: [
        { label: 'Control Panel', link: '/control-panel', submenus: ['Access Control', 'Audit Logs'] },
        { label: 'HR Management', link: '/hr', submenus: ['Employee Records', 'Payroll', 'Leave Requests'] },
        { label: 'Project Management', link: '/projects', submenus: ['Ongoing Projects', 'Deadlines', 'Resources'] },
        { label: 'Finance', link: '/finance', submenus: ['Budgeting', 'Expenditure', 'Revenue'] },
      ],
      user: [
        { label: 'Dashboard', link: '/dashboard', submenus: ['User Overview', 'Goals', 'Achievements'] },
        { label: 'Profile', link: '/profile', submenus: ['Account Settings', 'Privacy'] },
        { label: 'Support', link: '/support', submenus: ['Live Chat', 'Raise a Ticket'] },
      ],
    },
    company4: {
      admin: [
        { label: 'Management', link: '/management', submenus: ['Company Policies', 'Employee Welfare'] },
        { label: 'Operations', link: '/operations', submenus: ['Logistics', 'Inventory', 'Procurement'] },
        { label: 'IT Support', link: '/it-support', submenus: ['System Health', 'Backups', 'Incidents'] },
        { label: 'Marketing', link: '/marketing', submenus: ['Campaigns', 'Ad Spend', 'SEO'] },
      ],
      user: [
        { label: 'Dashboard', link: '/dashboard', submenus: ['Daily Overview', 'Performance Stats'] },
        { label: 'Learning', link: '/learning', submenus: ['Courses', 'Certifications', 'Workshops'] },
        { label: 'Support', link: '/support', submenus: ['Help Center', 'Knowledge Base'] },
      ],
    },
  };
  
  export default menuData;
  