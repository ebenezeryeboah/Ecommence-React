export default function Footer () {
    return (
    <footer className="flex flex-row w-[90%] justify-around items-center">

        <div>
            <h3 className="font-bold text-lg space-y-5 ">Funiro</h3>
            <p className="h-24 text-[16px]">400 University Drive Suite 200 Coral <br />Gables <br />FL 33134 USA</p>
        </div>

        <div className="list-none space-y-10 ">
            <h1>Links</h1>
            <li className="font-bold">Home</li>
            <li className="font-bold">Shop</li>
            <li className="font-bold">About</li>
            <li className="font-bold">Contact</li>
        
        </div>

        <div className="list-none space-y-15 ">
            <h1>Help</h1>
            <li className="font-bold">Payment Options</li>
            <li className="font-bold">Return</li>
            <li className="font-bold">Privacy Policies</li>
        </div>

        <div>
            <h1>Newsletter</h1>
            <div>
                <input type="" placeholder="Enter Your Email Address"/>
            <button>SUBSCRIBE</button>
            </div>
            
            
        </div>
        <div>
        <hr />

<p>All Right Reserved</p>
        </div>
       
        
    </footer>

    );
}


// export default function Footer() {
//     return (
//       <footer className="bg-gray-800 text-white text-center py-4">
//         <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
//       </footer>
//     );
//   }
  