function ToolTip({ children, tooltip }) {
  return (
    <div className='group relative inline-block'>
      {children}
      <span className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-slate-100  dark:bg-blueDarkest  bg-white text-slate-500 dark:text-slate-300 px-2 py-1 rounded absolute top-full mt-2 whitespace-nowrap'>
        {tooltip}
      </span>
    </div>
  );
}

export default ToolTip;
