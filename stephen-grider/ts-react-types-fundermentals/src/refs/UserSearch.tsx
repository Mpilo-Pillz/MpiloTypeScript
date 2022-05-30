import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Pillz", age: 30 },
  { name: "Fika", age: 20 },
  { name: "Niki", age: 10 },
  { name: "Dlamz", age: 5 },
];
const UserSearchWithRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    // inputRef.current?.focus();
    if (!inputRef.current) {
      // this is a type guard
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
        <hr />
        {/* {user?.name} is {user?.age} years old */}
      </div>
    </div>
  );
};

export default UserSearchWithRef;
