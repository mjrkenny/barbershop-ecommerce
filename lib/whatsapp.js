export const generateWhatsAppMessage = (cartItems, customerName, customerPhone, totalPrice) => {
  const baseUrl = 'https://wa.me/255689921921';
  
  let message = `🎭 *4FIVE BARBERSHOP* - Order Request\n\n`;
  message += `*Customer Details:*\n`;
  message += `Name: ${customerName}\n`;
  message += `Phone: ${customerPhone}\n\n`;
  message += `*Products Ordered:*\n`;
  
  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Price: TZS ${(item.price * item.quantity).toLocaleString()}\n\n`;
  });
  
  message += `*Total Amount: TZS ${totalPrice.toLocaleString()}*\n\n`;
  message += `Please confirm this order and arrange payment.\n`;
  message += `Thank you for shopping with 4FIVE BARBERSHOP! ✨`;
  
  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedMessage}`;
};

export const sendToWhatsApp = (cartItems, customerName, customerPhone, totalPrice) => {
  const whatsappUrl = generateWhatsAppMessage(cartItems, customerName, customerPhone, totalPrice);
  window.open(whatsappUrl, '_blank');
};