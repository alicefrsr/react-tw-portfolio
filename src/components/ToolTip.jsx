function ToolTip({ children, tooltip }) {
  return (
    <div className='group relative inline-block'>
      {children}
      <span className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition border-2 border-current dark:bg-blue-900 dark:border-none bg-white text-slate-400 px-2 py-1 rounded absolute top-full mt-2 whitespace-nowrap'>
        {tooltip}
      </span>
    </div>
  );
}

export default ToolTip;
