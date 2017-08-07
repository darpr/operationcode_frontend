const REQUEST_STATUSES = [
  {
    value: 'Unassigned',
    label: 'Unassigned'
  },
  {
    value: 'Assigned',
    label: 'Assigned'
  },
  {
    value: 'Contacted',
    label: 'Contacted'
  },
  {
    value: 'Awaiting Response',
    label: 'Awaiting Response'
  },
  {
    value: 'Scheduled',
    label: 'Scheduled'
  },
  {
    value: 'Completed',
    label: 'Completed'
  }
];

export const MENTOR_ANSWERS = [
  {
    value: true,
    label: 'Yes'
  },
  {
    value: false,
    label: 'No'
  }
];

export const IDENTIFIERS = [
  {
    value: false,
    label: 'Volunteer'
  },
  {
    value: true,
    label: 'Mil / Vet / Spouse'
  }
];

export const WORKINFO = [
  {
    value: 'fulltime',
    label: 'Employed Full-Time'
  },
  {
    value: 'parttime',
    label: 'Employed Part-Time'
  },
  {
    value: 'unemployed',
    label: 'Currently Un-Employed'
  }
];

export const SCHOOLINFO = [
  {
    value: 'online',
    label: 'Self-Taught (MOOCS, Etc.)'
  },
  {
    value: 'bootcamp',
    label: 'Code Bootcamp'
  },
  {
    value: 'associates',
    label: '2 Year Degree'
  },
  {
    value: 'college',
    label: '4 Year Degree'
  },
  {
    value: 'postgrad',
    label: 'Post Graduate Studies'
  }
];

export const MILSTATUS = [
  {
    value: 'current',
    label: 'Currently Serving'
  },
  {
    value: 'veteran',
    label: 'Veteran'
  },
  {
    value: 'spouse',
    label: 'Spouse / Family Member of Service Member'
  }
];

export const BRANCH = [
  {
    value: 'army',
    label: 'Army / Army Reserves'
  },
  {
    value: 'navy',
    label: 'Navy / Navy Reserves'
  },
  {
    value: 'marine',
    label: 'Marine Corps / Marine Corps Reserves'
  },
  {
    value: 'airforce',
    label: 'Air Force / Air Force Reserves'
  },
  {
    value: 'coastguard',
    label: 'Coast Guard / Coast Guard Reserves'
  },
  {
    value: 'armyguard',
    label: 'Army National Guard'
  },
  {
    value: 'airguard',
    label: 'Air National Guard'
  },
];

export default REQUEST_STATUSES;
