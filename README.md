# Student Management Easy

Beginner-friendly React project for learning:

- React Context API
- `createContext`
- `useContext`
- `useState`
- Custom hooks
- React Router
- Shared state between pages/components

## Contexts

### StudentContext
Owns the student list and exposes:
- `students`
- `addStudent()`
- `removeStudent()`
- `useStudents()`

### FavouriteContext
Owns favourite student IDs and exposes:
- `favourites`
- `addFavourite()`
- `removeFavourite()`
- `isFavourite()`
- `useFavourites()`

## Flow

`main.jsx`
→ `StudentProvider`
→ `FavouriteProvider`
→ `App`

Any child component can access shared state without prop drilling.

## Run

```bash
npm install
npm run dev
```
