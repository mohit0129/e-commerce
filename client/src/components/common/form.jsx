import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { getValidationError } from "@/utils/validation";
import { useState } from "react";

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const error = getValidationError(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    return !error;
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate all fields
    const isValid = formControls.every(control => 
      validateField(control.name, formData[control.name])
    );

    if (isValid) {
      onSubmit(event);
    }
  };

  function renderInputsByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <div className="space-y-1">
            <Input
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.name}
              type={getControlItem.type}
              value={value}
              onChange={(event) => handleInputChange(getControlItem.name, event.target.value)}
              className={errors[getControlItem.name] ? "border-red-500" : ""}
            />
            {errors[getControlItem.name] && (
              <p className="text-sm text-red-500">{errors[getControlItem.name]}</p>
            )}
          </div>
        );
        break;

      case "select":
        element = (
          <div className="space-y-1">
            <Select
              onValueChange={(value) => handleInputChange(getControlItem.name, value)}
              value={value}
            >
              <SelectTrigger className={`w-full ${errors[getControlItem.name] ? "border-red-500" : ""}`}>
                <SelectValue placeholder={getControlItem.label} />
              </SelectTrigger>
              <SelectContent>
                {getControlItem.options && getControlItem.options.length > 0
                  ? getControlItem.options.map((optionItem) => (
                      <SelectItem key={optionItem.id} value={optionItem.id}>
                        {optionItem.label}
                      </SelectItem>
                    ))
                  : null}
              </SelectContent>
            </Select>
            {errors[getControlItem.name] && (
              <p className="text-sm text-red-500">{errors[getControlItem.name]}</p>
            )}
          </div>
        );
        break;

      case "textarea":
        element = (
          <div className="space-y-1">
            <Textarea
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.id}
              value={value}
              onChange={(event) => handleInputChange(getControlItem.name, event.target.value)}
              className={errors[getControlItem.name] ? "border-red-500" : ""}
            />
            {errors[getControlItem.name] && (
              <p className="text-sm text-red-500">{errors[getControlItem.name]}</p>
            )}
          </div>
        );
        break;

      default:
        element = (
          <div className="space-y-1">
            <Input
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.name}
              type={getControlItem.type}
              value={value}
              onChange={(event) => handleInputChange(getControlItem.name, event.target.value)}
              className={errors[getControlItem.name] ? "border-red-500" : ""}
            />
            {errors[getControlItem.name] && (
              <p className="text-sm text-red-500">{errors[getControlItem.name]}</p>
            )}
          </div>
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button 
        disabled={isBtnDisabled || Object.values(errors).some(error => error)} 
        type="submit" 
        className="mt-2 w-full"
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
