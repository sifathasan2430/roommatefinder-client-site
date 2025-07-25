import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo.png'
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import UserAuthContext from "../../Context/Context";

const Navbar = () => {
  const { user, userLogOut } = useContext(UserAuthContext);
  const location = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Rooms", href: "/allrooms" },
    { name: "About Us", href: "/about" },
    ...(user ? [{ name: "My Bookings", href: "/mybookings" }] : []),
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-700 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[#ff8c00]">
            <img src={logo} alt="Logo" className="h-full w-full" />
          </div>
          <span className="text-xl font-bold">Roomfinder</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-[#ff8c00]"
                  : "text-gray-700 hover:text-[#ff8c00]"
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#e67e00] rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.photoURL || ""} />
                    <AvatarFallback>{user.displayName?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem asChild>
                  <Link to="/profile">{user.displayName}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/bookings">My Bookings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={userLogOut}
                  className="text-red-600 focus:text-red-600 focus:bg-red-50"
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                asChild
                variant="outline"
                className="border-[#ff8c00] text-[#ff8c00] hover:bg-[#ff8c00]/10"
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-[#ff8c00] hover:bg-[#e67e00] text-white">
                <Link to="/signup">Register</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {isSheetOpen ? <X /> : <Menu />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                {/* Nav Links */}
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className={`px-4 py-2 text-lg font-medium ${
                        isActive(link.href)
                          ? "text-[#ff8c00] bg-[#ff8c00]/10 rounded-md"
                          : "text-gray-700 hover:text-[#ff8c00]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* Auth */}
                <div className="mt-auto mb-8 flex flex-col gap-4 px-4">
                  {user ? (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.photoURL || ""} />
                          <AvatarFallback>{user.displayName?.charAt(0) || "U"}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.displayName}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          userLogOut();
                          setIsSheetOpen(false);
                        }}
                        variant="outline"
                        className="text-red-600 border-red-600 hover:bg-red-50"
                      >
                        Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        asChild
                        variant="outline"
                        className="border-[#ff8c00] text-[#ff8c00] hover:bg-[#ff8c00]/10"
                      >
                        <Link to="/login" onClick={() => setIsSheetOpen(false)}>
                          Login
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className="bg-[#ff8c00] hover:bg-[#e67e00] text-white"
                      >
                        <Link to="/register" onClick={() => setIsSheetOpen(false)}>
                          Register
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
