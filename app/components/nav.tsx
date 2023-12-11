"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";




  

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [theme, setTheme] = useState('light'); // default theme

	const lightThemeStyles = {
		backgroundColor: 'white',
		color: 'black',
		// Add other light theme styles here
	  };
	  
	  const darkThemeStyles = {
		backgroundColor: 'black',
		color: 'white',
		// Add other dark theme styles here
	  };
	  

	  const toggleTheme = () => {
		setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
	  };
	
	  useEffect(() => {
		// Apply theme to body or a parent element if needed
		// You can also apply it to individual components or divs
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
		  setIntersecting(entry.isIntersecting),
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	  }, []);

	return (
		<header ref={ref} style={theme === 'light' ? lightThemeStyles : darkThemeStyles}>
			<button onClick={toggleTheme} >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
