'use client'

const useUser = () =>{
const router = useRouter();
const {session,menageSession, role, manageRole} = useContext(AuthContext)
const user = JSON.parse(localStorage.getItem("user"));
const [select,setSelect] = useState('Inicio')

const logout = async () => {
  const user = await account.deleteSession("current");
  menageSession(null);
  router.push('/')
};

const getUser = async () => {
  const user =  account.getSession("current");
  user.then(function (response) {
    console.log(response); 
    menageSession(response);
}, function (error) {
    console.log(error); // Failure
});
 
};

useEffect(() => {
  getUser();
}, []);}