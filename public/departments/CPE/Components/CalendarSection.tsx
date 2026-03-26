import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function CalendarSection({ dept }: { dept: any }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const currentMonthPrefix = `${year}-${String(month + 1).padStart(2, "0")}`;
  const eventsThisMonth = dept.calendar.events
    .filter((e: any) => e.date.startsWith(currentMonthPrefix))
    .sort((a: any, b: any) => a.date.localeCompare(b.date));

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const isToday = (d: number) => {
    const today = new Date();
    return today.getDate() === d && today.getMonth() === month && today.getFullYear() === year;
  };

  return (
    <section id="calendar" className="relative w-full bg-slate-950 py-24 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[10px] font-black tracking-[0.3em] text-yellow-500 uppercase mb-4">Academic Schedule</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">{dept.calendar.title}</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">{dept.calendar.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl h-fit">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {monthNames[month]} {year}
              </h3>
              <div className="flex gap-2">
                <button onClick={handlePrevMonth} className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={handleNextMonth} className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4 text-center">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, i) => (
                <div key={i} className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square"></div>
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;

                const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                
                const dayEvents = dept.calendar.events.filter((e: any) => e.date === dateString);
                const hasDefense = dayEvents.some((e: any) => e.type === 'defense');
                const hasEvent = dayEvents.some((e: any) => e.type === 'event');
                const todayFlag = isToday(day);

                return (
                  <div 
                    key={day} 
                    title={dayEvents.map((e: any) => e.title).join(", ")} // Hover tooltip!
                    className={`aspect-square flex items-center justify-center rounded-lg border text-sm font-semibold transition-all duration-300
                      ${todayFlag ? 'bg-white text-slate-900 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' : ''}
                      ${hasDefense && !todayFlag ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/50 hover:bg-yellow-500/20 shadow-[inset_0_0_10px_rgba(234,179,8,0.1)]' : ''}
                      ${hasEvent && !todayFlag ? 'bg-blue-500/10 text-blue-400 border-blue-500/50 hover:bg-blue-500/20 shadow-[inset_0_0_10px_rgba(59,130,246,0.1)]' : ''}
                      ${!todayFlag && !hasDefense && !hasEvent ? 'bg-slate-950/50 text-slate-400 border-slate-800' : ''}
                    `}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-6 justify-center">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"></span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Today</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.8)]"></span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Defense</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Event</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {eventsThisMonth.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-800 rounded-3xl text-slate-500">
                <p className="font-mono text-sm uppercase tracking-widest">No Events Scheduled</p>
                <p className="text-xs mt-2">Check back later or navigate to a different month.</p>
              </div>
            ) : (
              eventsThisMonth.map((event: any) => {
                const isDefense = event.type === 'defense';
                const eventDay = parseInt(event.date.split('-')[2]);

                return (
                  <div key={event.id} className={`group relative flex flex-col sm:flex-row gap-6 bg-slate-900/40 border rounded-2xl p-6 transition-all duration-300 overflow-hidden cursor-default
                    ${isDefense ? "border-slate-800 hover:border-yellow-500/50 hover:bg-slate-900" : "border-slate-800 hover:border-blue-500/50 hover:bg-slate-900"}
                  `}>
                    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-50 group-hover:opacity-100 transition-opacity ${isDefense ? "bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]" : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"}`} />
                    
                    <div className="flex flex-col items-center justify-center min-w-[80px] text-center border-b sm:border-b-0 sm:border-r border-slate-700/50 pb-4 sm:pb-0 sm:pr-6">
                      <span className={`text-xs font-bold uppercase tracking-widest ${isDefense ? "text-yellow-500" : "text-blue-500"}`}>
                        {monthNames[month].substring(0, 3)}
                      </span>
                      <span className="text-4xl font-black text-white">{eventDay}</span>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded border text-[9px] font-black uppercase tracking-widest ${isDefense ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" : "bg-blue-500/10 text-blue-400 border-blue-500/20"}`}>
                          {isDefense ? 'Defense' : 'Event'}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{event.time}</span>
                      </div>
                      <h4 className={`text-lg font-bold text-white mb-1 transition-colors ${isDefense ? "group-hover:text-yellow-400" : "group-hover:text-blue-400"}`}>
                        {event.title}
                      </h4>
                      <p className="text-sm text-slate-400 flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4 text-slate-500" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>
      </div>
    </section>
  );
}