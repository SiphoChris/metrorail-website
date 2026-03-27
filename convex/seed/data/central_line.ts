// Central Line seed data
// Timetables effective: 14 May 2025 (weekday) / 12 April 2025 (weekend)
// Source: Metrorail Western Cape physical timetables, Cape Town station

export const centralLine = {
  line: {
    name: 'Central Line',
    slug: 'central-line',
    color: '#2b65ff',
    isActive: true,
  },

  stations: [
    // Main corridor: Cape Town → Khayelitsha / Chris Hani
    { name: 'Cape Town',     slug: 'cape-town',     zone: 1, isTerminus: true,  isActive: true },
    { name: 'Woodstock',     slug: 'woodstock',     zone: 1, isTerminus: false, isActive: true },
    { name: 'Salt River',    slug: 'salt-river',    zone: 1, isTerminus: false, isActive: true },
    { name: 'Koeberg Road',  slug: 'koeberg-road',  zone: 1, isTerminus: false, isActive: true },
    { name: 'Maitland',      slug: 'maitland',      zone: 1, isTerminus: false, isActive: true },
    { name: 'Ndabeni',       slug: 'ndabeni',       zone: 1, isTerminus: false, isActive: true },
    { name: 'Pinelands',     slug: 'pinelands',     zone: 1, isTerminus: false, isActive: true },
    { name: 'Esplanade',     slug: 'esplanade',     zone: 2, isTerminus: false, isActive: true },
    { name: 'Paardeneiland', slug: 'paardeneiland', zone: 2, isTerminus: false, isActive: true },
    { name: 'Ysterplaat',    slug: 'ysterplaat',    zone: 2, isTerminus: false, isActive: true },
    { name: 'Mutual',        slug: 'mutual',        zone: 2, isTerminus: false, isActive: true },
    { name: 'Langa',         slug: 'langa',         zone: 2, isTerminus: false, isActive: true },
    { name: 'Nyanga',        slug: 'nyanga',        zone: 2, isTerminus: false, isActive: true },
    { name: 'Philippi',      slug: 'philippi',      zone: 2, isTerminus: false, isActive: true },
    { name: 'Stock Road',    slug: 'stock-road',    zone: 3, isTerminus: false, isActive: true },
    { name: 'Mandalay',      slug: 'mandalay',      zone: 3, isTerminus: false, isActive: true },
    { name: 'Nolungile',     slug: 'nolungile',     zone: 3, isTerminus: false, isActive: true },
    { name: 'Nonkqubela',    slug: 'nonkqubela',    zone: 3, isTerminus: false, isActive: true },
    { name: 'Khayelitsha',   slug: 'khayelitsha',   zone: 4, isTerminus: false, isActive: true },
    { name: 'Chris Hani',    slug: 'chris-hani',    zone: 4, isTerminus: true,  isActive: true },
    // Bellville branch (splits at Langa)
    { name: 'Lavistown',     slug: 'lavistown',     zone: 2, isTerminus: false, isActive: true },
    { name: 'Belhar',        slug: 'belhar',        zone: 3, isTerminus: false, isActive: true },
    { name: 'Unibell',       slug: 'unibell',       zone: 3, isTerminus: false, isActive: true },
    { name: 'Pentech',       slug: 'pentech',       zone: 3, isTerminus: false, isActive: true },
    { name: 'Sarepta',       slug: 'sarepta',       zone: 3, isTerminus: false, isActive: true },
    { name: 'Bellville',     slug: 'bellville',     zone: 4, isTerminus: true,  isActive: true },
  ],

  // Schedules reference station slugs — the runner resolves them to IDs
  schedules: [
    // -------------------------------------------------------------------------
    // WEEKDAY OUTBOUND — Cape Town → Chris Hani
    // -------------------------------------------------------------------------
    { from: 'cape-town', to: 'chris-hani', dep: '03:15', arr: '04:19', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '03:35', arr: '04:31', platform: '21', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '04:35', arr: '05:31', platform: '21', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '04:50', arr: '05:54', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '05:40', arr: '06:30', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '06:05', arr: '07:01', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '06:40', arr: '07:46', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '06:50', arr: '07:52', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '07:20', arr: '08:16', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '07:55', arr: '08:51', platform: '17', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '08:20', arr: '09:56', platform: '21', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '09:00', arr: '10:04', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '09:20', arr: '11:10', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '11:40', arr: '13:09', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '12:50', arr: '13:55', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '13:40', arr: '14:44', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '14:30', arr: '15:28', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '15:00', arr: '15:56', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '15:30', arr: '16:36', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '15:40', arr: '16:30', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '16:15', arr: '17:15', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '16:55', arr: '17:51', platform: '21', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '17:10', arr: '18:07', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '17:25', arr: '18:20', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '18:10', arr: '19:09', platform: '4',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '18:30', arr: '19:19', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'chris-hani', dep: '18:55', arr: '20:08', platform: '20', type: 'all-stops', dayType: 'weekday' },

    // -------------------------------------------------------------------------
    // WEEKDAY OUTBOUND — Cape Town → Bellville
    // -------------------------------------------------------------------------
    { from: 'cape-town', to: 'bellville', dep: '06:30', arr: '07:20', platform: '17', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '07:00', arr: '07:50', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '08:10', arr: '09:10', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '08:50', arr: '09:50', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '10:00', arr: '11:00', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '10:05', arr: '11:05', platform: '21', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '11:10', arr: '12:10', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '11:15', arr: '12:15', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '13:40', arr: '14:40', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '15:25', arr: '16:25', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '15:28', arr: '16:28', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '16:30', arr: '17:30', platform: '17', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '17:15', arr: '18:15', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '17:18', arr: '18:18', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '18:05', arr: '19:05', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '18:08', arr: '19:08', platform: '20', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '18:20', arr: '19:15', platform: '17', type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '19:00', arr: '19:55', platform: '6',  type: 'all-stops', dayType: 'weekday' },
    { from: 'cape-town', to: 'bellville', dep: '19:02', arr: '19:57', platform: '21', type: 'all-stops', dayType: 'weekday' },

    // -------------------------------------------------------------------------
    // WEEKDAY INBOUND — Bellville → Cape Town
    // -------------------------------------------------------------------------
    { from: 'bellville', to: 'cape-town', dep: '05:22', arr: '06:15', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '06:10', arr: '07:28', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '07:20', arr: '08:00', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '08:00', arr: '08:40', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '08:05', arr: '09:10', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '09:10', arr: '09:57', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '09:35', arr: '10:20', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '11:38', arr: '13:00', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '13:00', arr: '14:25', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '15:00', arr: '16:18', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '16:45', arr: '18:05', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '16:50', arr: '17:35', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '17:35', arr: '18:35', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '18:05', arr: '18:55', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '18:35', arr: '19:25', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '18:55', arr: '19:29', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '19:29', arr: '20:15', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '20:15', arr: '21:31', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'bellville', to: 'cape-town', dep: '20:36', arr: '21:25', platform: '10', type: 'all-stops', dayType: 'weekday' },

    // -------------------------------------------------------------------------
    // WEEKDAY INBOUND — Chris Hani → Cape Town
    // -------------------------------------------------------------------------
    { from: 'chris-hani', to: 'cape-town', dep: '04:55', arr: '06:10', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '05:02', arr: '06:15', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '05:08', arr: '06:40', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '06:12', arr: '07:28', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '07:25', arr: '08:40', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '08:12', arr: '09:10', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '08:42', arr: '09:35', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '08:49', arr: '09:51', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '09:51', arr: '10:57', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '10:22', arr: '11:38', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '11:45', arr: '13:00', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '13:10', arr: '14:25', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '13:49', arr: '15:00', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '14:07', arr: '15:24', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '15:02', arr: '16:18', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '15:13', arr: '16:30', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '16:11', arr: '17:12', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '17:40', arr: '18:35', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '17:47', arr: '18:55', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '18:02', arr: '19:25', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '19:00', arr: '20:15', platform: '11', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '19:07', arr: '20:36', platform: '10', type: 'all-stops', dayType: 'weekday' },
    { from: 'chris-hani', to: 'cape-town', dep: '20:20', arr: '21:25', platform: '11', type: 'all-stops', dayType: 'weekday' },

    // -------------------------------------------------------------------------
    // WEEKEND OUTBOUND — Cape Town → Chris Hani / Khayelitsha
    // -------------------------------------------------------------------------
    { from: 'cape-town', to: 'chris-hani',  dep: '05:25', arr: '06:36', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '06:10', arr: '07:02', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'khayelitsha', dep: '06:40', arr: '08:14', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '07:10', arr: '08:21', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '08:00', arr: '09:04', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '08:10', arr: '09:07', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '09:00', arr: '10:11', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '09:40', arr: '10:41', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '10:10', arr: '11:21', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '11:00', arr: '12:04', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '11:10', arr: '12:07', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '12:10', arr: '13:02', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '12:50', arr: '14:02', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'chris-hani',  dep: '13:10', arr: '14:21', platform: '6', type: 'all-stops', dayType: 'weekend' },

    // WEEKEND OUTBOUND — Cape Town → Bellville
    { from: 'cape-town', to: 'bellville', dep: '06:54', arr: '07:15', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'bellville', dep: '08:09', arr: '08:30', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'bellville', dep: '09:29', arr: '09:50', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'bellville', dep: '10:49', arr: '11:10', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'bellville', dep: '12:59', arr: '13:20', platform: '6', type: 'all-stops', dayType: 'weekend' },
    { from: 'cape-town', to: 'bellville', dep: '14:19', arr: '14:40', platform: '6', type: 'all-stops', dayType: 'weekend' },

    // -------------------------------------------------------------------------
    // WEEKEND INBOUND — Bellville → Cape Town
    // -------------------------------------------------------------------------
    { from: 'bellville', to: 'cape-town', dep: '05:50', arr: '07:01', platform: '10', type: 'all-stops', dayType: 'weekend' },
    { from: 'bellville', to: 'cape-town', dep: '07:25', arr: '08:01', platform: '11', type: 'all-stops', dayType: 'weekend' },
    { from: 'bellville', to: 'cape-town', dep: '08:00', arr: '08:27', platform: '10', type: 'all-stops', dayType: 'weekend' },
    { from: 'bellville', to: 'cape-town', dep: '08:01', arr: '09:30', platform: '11', type: 'all-stops', dayType: 'weekend' },
    { from: 'bellville', to: 'cape-town', dep: '09:46', arr: '11:31', platform: '10', type: 'all-stops', dayType: 'weekend' },
    { from: 'bellville', to: 'cape-town', dep: '10:17', arr: '11:52', platform: '11', type: 'all-stops', dayType: 'weekend' },
    { from: 'bellville', to: 'cape-town', dep: '11:31', arr: '12:30', platform: '10', type: 'all-stops', dayType: 'weekend' },
    { from: 'bellville', to: 'cape-town', dep: '13:11', arr: '14:15', platform: '11', type: 'all-stops', dayType: 'weekend' },
    { from: 'bellville', to: 'cape-town', dep: '14:17', arr: '15:41', platform: '10', type: 'all-stops', dayType: 'weekend' },

    // -------------------------------------------------------------------------
    // WEEKEND INBOUND — Chris Hani → Cape Town
    // -------------------------------------------------------------------------
    { from: 'chris-hani', to: 'cape-town', dep: '05:50', arr: '07:01', platform: '10', type: 'all-stops', dayType: 'weekend' },
    { from: 'chris-hani', to: 'cape-town', dep: '06:50', arr: '08:01', platform: '11', type: 'all-stops', dayType: 'weekend' },
    { from: 'chris-hani', to: 'cape-town', dep: '08:35', arr: '09:46', platform: '10', type: 'all-stops', dayType: 'weekend' },
    { from: 'chris-hani', to: 'cape-town', dep: '10:20', arr: '11:31', platform: '11', type: 'all-stops', dayType: 'weekend' },
    { from: 'chris-hani', to: 'cape-town', dep: '12:00', arr: '13:11', platform: '10', type: 'all-stops', dayType: 'weekend' },
    { from: 'chris-hani', to: 'cape-town', dep: '13:30', arr: '14:17', platform: '11', type: 'all-stops', dayType: 'weekend' },
    { from: 'chris-hani', to: 'cape-town', dep: '14:30', arr: '15:41', platform: '10', type: 'all-stops', dayType: 'weekend' },
  ],
} as const