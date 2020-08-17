# Acorn
This is the frontend code for [`Acorn`](https://ts-acorn-frontend.vercel.app/), backend code can be found [`here`](https://github.com/benriis/acorn_backend)

## Installation
```bash
git clone https://github.com/benriis/ts-acorn-frontend.git my-acorn
cd my-acorn
npm install 
# Run development server on default port 3000
npx run dev
# If you want to specify your own host/port use npx and Next.js CLI
npx next dev -p 4000
# or
npx next dev -H 123.456.78.90
```

## Env files
Create a `.env.local` file in your root folder and add the following code
```bash
# Where hostname and port is where your backend code is running 
NEXT_PUBLIC_SERVER_HOST="http://hostname:port"
```

## Todo-list

- [ ] Add tests


## Made with 
[Next.js](https://nextjs.org/)