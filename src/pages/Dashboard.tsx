import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, LayoutGrid, CalendarClock, Users, Clock, Settings, Plus } from 'lucide-react';

type TabKey = 'scheduling' | 'meetings' | 'availability' | 'integrations' | 'workflows' | 'routing';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>('scheduling');

  return (
    <div className="min-h-screen bg-gray-900 flex">
      <aside className="w-64 border-r border-gray-800 hidden md:flex md:flex-col">
        <div className="h-16 px-4 border-b border-gray-800 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">Appointy</span>
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          <SidebarItem
            icon={LayoutGrid}
            label="Scheduling"
            active={activeTab === 'scheduling'}
            onClick={() => setActiveTab('scheduling')}
          />
          <SidebarItem
            icon={CalendarClock}
            label="Meetings"
            active={activeTab === 'meetings'}
            onClick={() => setActiveTab('meetings')}
          />
          <SidebarItem
            icon={Clock}
            label="Availability"
            active={activeTab === 'availability'}
            onClick={() => setActiveTab('availability')}
          />

          {/* Existing options (placeholders for now) */}
          <div className="pt-3">
            <p className="px-3 text-xs uppercase tracking-wide text-gray-500 mb-2">More</p>
            <SidebarItem
              icon={Users}
              label="Integrations & apps"
              active={activeTab === 'integrations'}
              onClick={() => setActiveTab('integrations')}
            />
            <SidebarItem
              icon={Settings}
              label="Workflows"
              active={activeTab === 'workflows'}
              onClick={() => setActiveTab('workflows')}
            />
            <SidebarItem
              icon={Settings}
              label="Routing"
              active={activeTab === 'routing'}
              onClick={() => setActiveTab('routing')}
            />
          </div>
        </nav>
      </aside>

      <main className="flex-1 min-w-0">
        <header className="h-16 px-4 md:px-6 border-b border-gray-800 flex items-center justify-between sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-2 md:hidden">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold">Appointy</span>
          </div>
        </header>

        <section className="p-4 md:p-6">
          {activeTab === 'scheduling' && <SchedulingSection />}
          {activeTab === 'meetings' && (
            <MeetingsSection onViewEventTypes={() => setActiveTab('scheduling')} />
          )}
          {activeTab === 'availability' && <AvailabilitySection />}
          {activeTab === 'integrations' && <PlaceholderSection title="Integrations & apps" />}
          {activeTab === 'workflows' && <PlaceholderSection title="Workflows" />}
          {activeTab === 'routing' && <PlaceholderSection title="Routing" />}
        </section>
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active, onClick }: { icon: any; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
        active ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}

function SchedulingSection() {
  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Scheduling</h1>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 text-gray-900 rounded-lg font-medium text-sm"
          aria-label="Create"
        >
          <Plus className="w-4 h-4 text-blue-600" />
          <span>Create</span>
        </button>
      </div>
      <p className="text-gray-400 mb-6">Create meeting you want to offer.</p>
    </div>
  );
}

function MeetingsSection({ onViewEventTypes }: { onViewEventTypes?: () => void }) {
  const [active, setActive] = useState<'upcoming' | 'past'>('upcoming');

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Meetings</h1>
      </div>

      <div className="border-b border-gray-800 mb-4">
        <nav className="flex items-center gap-6 text-sm">
          <button
            className={`pb-3 -mb-px ${active === 'upcoming' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-gray-300'}`}
            onClick={() => setActive('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={`pb-3 -mb-px ${active === 'past' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-gray-300'}`}
            onClick={() => setActive('past')}
          >
            Past
          </button>
          <button className={`pb-3 -mb-px text-gray-400 hover:text-gray-300`}>
            Date Range ▾
          </button>
        </nav>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-10 text-center">
        <div className="mx-auto mb-4 w-14 h-14 rounded-xl bg-gray-700/60 flex items-center justify-center">
          <Calendar className="w-7 h-7 text-gray-300" />
        </div>
        <h3 className="text-white font-semibold mb-1">No Events Yet</h3>
        <p className="text-gray-400 text-sm mb-4">Share Event Type links to schedule events.</p>
        <button
          onClick={onViewEventTypes}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm"
        >
          View Event Types
        </button>
      </div>
    </div>
  );
}

function AvailabilitySection() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Availability</h1>
      <p className="text-gray-400 mb-6">Set your typical hours for meetings.</p>

      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 space-y-4">
        <div className="text-gray-300">Default schedule</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-700 p-4">
            <div className="text-sm text-gray-400 mb-2">Weekdays</div>
            <div className="text-white">9:00 AM – 5:00 PM</div>
          </div>
          <div className="rounded-lg border border-gray-700 p-4">
            <div className="text-sm text-gray-400 mb-2">Weekends</div>
            <div className="text-white">Unavailable</div>
          </div>
        </div>
        <button className="px-3 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg">Edit availability</button>
      </div>
    </div>
  );
}

function PlaceholderSection({ title }: { title: string }) {
  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h1>
      <p className="text-gray-400 mb-6">We will wire this section next based on your instructions.</p>
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-gray-400 text-sm">Placeholder content</div>
    </div>
  );
}


