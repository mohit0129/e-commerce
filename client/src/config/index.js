export const registerFormControls = [
  {
    id: "userName",
    name: "userName",
    label: "Username",
    placeholder: "Enter your username",
    type: "text",
    componentType: "input",
    validation: {
      required: true,
      minLength: 3,
      maxLength: 20,
      pattern: /^[a-zA-Z0-9_]+$/
    }
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
    validation: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    }
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
    validation: {
      required: true,
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    }
  },
];

export const loginFormControls = [
  {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
    validation: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    }
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
    validation: {
      required: true
    }
  },
];

export const addProductFormElements = [
  {
    id: "title",
    name: "title",
    label: "Title",
    placeholder: "Enter product title",
    type: "text",
    componentType: "input",
    validation: {
      required: true,
      minLength: 3,
      maxLength: 100
    }
  },
  {
    id: "description",
    name: "description",
    label: "Description",
    placeholder: "Enter product description",
    type: "text",
    componentType: "textarea",
    validation: {
      required: true,
      minLength: 10,
      maxLength: 500
    }
  },
  {
    id: "category",
    name: "category",
    label: "Category",
    placeholder: "Select product category",
    type: "text",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" }
    ],
    validation: {
      required: true
    }
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  },
  {
    id: "price",
    name: "price",
    label: "Price",
    placeholder: "Enter product price",
    type: "number",
    componentType: "input",
    validation: {
      required: true,
      min: 0,
      pattern: /^\d+(\.\d{1,2})?$/
    }
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    id: "stock",
    name: "stock",
    label: "Stock",
    placeholder: "Enter product stock",
    type: "number",
    componentType: "input",
    validation: {
      required: true,
      min: 0,
      pattern: /^\d+$/
    }
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "men",
    label: "Men",
    path: "/shop/listing",
  },
  {
    id: "women",
    label: "Women",
    path: "/shop/listing",
  },
  {
    id: "kids",
    label: "Kids",
    path: "/shop/listing",
  },
  {
    id: "footwear",
    label: "Footwear",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Accessories",
  footwear: "Footwear",
};

export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M",
};

export const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
    { id: "accessories", label: "Accessories" },
    { id: "footwear", label: "Footwear" },
  ],
  brand: [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi's" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    id: "fullName",
    name: "fullName",
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
    componentType: "input",
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    type: "tel",
    componentType: "input",
    validation: {
      required: true,
      pattern: /^\d{10}$/
    }
  },
  {
    id: "address",
    name: "address",
    label: "Address",
    placeholder: "Enter your address",
    type: "text",
    componentType: "textarea",
    validation: {
      required: true,
      minLength: 10,
      maxLength: 200
    }
  },
  {
    id: "city",
    name: "city",
    label: "City",
    placeholder: "Enter your city",
    type: "text",
    componentType: "input",
    validation: {
      required: true,
      minLength: 2,
      maxLength: 50
    }
  },
  {
    id: "state",
    name: "state",
    label: "State",
    placeholder: "Enter your state",
    type: "text",
    componentType: "input",
    validation: {
      required: true,
      minLength: 2,
      maxLength: 50
    }
  },
  {
    id: "pincode",
    name: "pincode",
    label: "Pincode",
    placeholder: "Enter your pincode",
    type: "text",
    componentType: "input",
    validation: {
      required: true,
      pattern: /^\d{6}$/
    }
  },
];
