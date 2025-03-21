interface Props extends Omit<React.SVGProps<SVGElement>, 'ref'> {}

const IconLoader = (props: Props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M12 7.11429V3M12 21V16.8857M16.8857 12H21M3 12H7.11429M15.455 8.54546L18.3643 5.63622M5.6354 18.3641L8.54464 15.4549M15.455 15.4545L18.3643 18.3638M5.6354 5.63591L8.54464 8.54515'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconLoader;
