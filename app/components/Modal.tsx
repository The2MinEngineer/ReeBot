const Modal = ({
	classname,
	children,
}: {
	classname: string;
	children: any;
}) => {
	return <div className={classname}>{children}</div>;
};

export default Modal;
