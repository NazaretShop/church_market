import { IGoodsIBaskedModel, IOrderModel } from "@/common/types";

export const generateOrderHTML = (order: IOrderModel): string => {
  const goodsListHTML = order.goods
    .map(
      (good: IGoodsIBaskedModel) => `
      <div>
        <h3>${good.name}</h3>
        <p>Кількість товару: ${good.count}</p>
        <p>Ціна за одиницю товару: ${good.price}грн</p>
        <img style="width: 200px; height: 200px; object-fit:contain;" src="${good.image}" alt="${good.name}" />
        <p>Загальна сума: ${good.total}грн</p>
      </div>
    `
    )
    .join("");

  const orderHTML = `
      <div>
        <h2>Деталі замовлення</h2>
        <p>Ім'я покупця: ${order.firstName} ${order.lastName}</p>
        <p>Контактний номер: ${order.phoneNumber}</p>
        <p>Пошта: ${order.email}</p>
        <p>Регіон: ${order.region}</p>
        <p>Населений пункт: ${order.settlement}</p>
        <p>Відділення: ${order.department}</p>
        <p>Коментар до замовлення: <br/> ${order.comment}</p>
        <h3>Товари на замовлення:</h3>
        <hr/>
        ${goodsListHTML}
        <hr/>
        <br/>
        <p>Загальна сума замовлення: ${order.price}грн</p>
        <p>Дата замовлення: ${new Date(order.createdAt).toLocaleString()}</p>
      </div>
    `;

  return orderHTML;
};
