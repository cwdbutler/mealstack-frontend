import './PlanInfo.css';

export default function PlanInfo() {
  return (
    <div className="plan-info">
      <div className="plan-info__body">
        <div className="plan-info__body__left-column">
          <div className="plan-info__meal">
            <div className="plan-info__meal-image"></div>
            <div className="plan-info__meal-text">
              <h2>Breakfast</h2>
              <p>Recipe name</p>
            </div>
            <div className="plan-info__meal__stats">
              <div className="plan-info__meal__stats-stat protein">
                <div className="plan-info__meal__stats-value">10g</div>
                <div className="plan-info__meal__stats-type">Protein</div>
              </div>
              <div className="plan-info__meal__stats-stat fat">
                <div className="plan-info__meal__stats-value">15g</div>
                <div className="plan-info__meal__stats-type">Fat</div>
              </div>
              <div className="plan-info__meal__stats-stat carbs">
                <div className="plan-info__meal__stats-value">30g</div>
                <div className="plan-info__meal__stats-type">Carbs</div>
              </div>
              <div className="plan-info__meal__stats-stat calories">
                <div className="plan-info__meal__stats-value">352</div>
                <div className="plan-info__meal__stats-type">Calories</div>
              </div>
            </div>
          </div>
          <div className="plan-info__meal">
            <div className="plan-info__meal-image"></div>
            <div className="plan-info__meal-text">
              <h2>Lunch</h2>
              <p>Recipe name</p>
            </div>
            <div className="plan-info__meal__stats">
              <div className="plan-info__meal__stats-stat protein">
                <div className="plan-info__meal__stats-value">20g</div>
                <div className="plan-info__meal__stats-type">Protein</div>
              </div>
              <div className="plan-info__meal__stats-stat fat">
                <div className="plan-info__meal__stats-value">15g</div>
                <div className="plan-info__meal__stats-type">Fat</div>
              </div>
              <div className="plan-info__meal__stats-stat carbs">
                <div className="plan-info__meal__stats-value">50g</div>
                <div className="plan-info__meal__stats-type">Carbs</div>
              </div>
              <div className="plan-info__meal__stats-stat calories">
                <div className="plan-info__meal__stats-value">850</div>
                <div className="plan-info__meal__stats-type">Calories</div>
              </div>
            </div>
          </div>
          <div className="plan-info__meal">
            <div className="plan-info__meal-image"></div>
            <div className="plan-info__meal-text">
              <h2>Dinner</h2>
              <p>Recipe name</p>
            </div>
            <div className="plan-info__meal__stats">
              <div className="plan-info__meal__stats-stat protein">
                <div className="plan-info__meal__stats-value">60g</div>
                <div className="plan-info__meal__stats-type">Protein</div>
              </div>
              <div className="plan-info__meal__stats-stat fat">
                <div className="plan-info__meal__stats-value">20g</div>
                <div className="plan-info__meal__stats-type">Fat</div>
              </div>
              <div className="plan-info__meal__stats-stat carbs">
                <div className="plan-info__meal__stats-value">70g</div>
                <div className="plan-info__meal__stats-type">Carbs</div>
              </div>
              <div className="plan-info__meal__stats-stat calories">
                <div className="plan-info__meal__stats-value">1058</div>
                <div className="plan-info__meal__stats-type">Calories</div>
              </div>
            </div>
          </div>
        </div>
        <div className="plan-info__body__right-column">
          <h1>Shopping list</h1>
          <div className="plan-info__body__shopping-list">
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
          </div>
        </div>
      </div>
      <div className="plan-info__footer">
        <h1>Totals:</h1>
        <div className="plan-info__meal__stats">
          <div className="plan-info__meal__stats-stat protein">
            <div className="plan-info__meal__stats-value">100g</div>
            <div className="plan-info__meal__stats-type">Protein</div>
          </div>
          <div className="plan-info__meal__stats-stat fat">
            <div className="plan-info__meal__stats-value">50g</div>
            <div className="plan-info__meal__stats-type">Fat</div>
          </div>
          <div className="plan-info__meal__stats-stat carbs">
            <div className="plan-info__meal__stats-value">150g</div>
            <div className="plan-info__meal__stats-type">Carbs</div>
          </div>
          <div className="plan-info__meal__stats-stat calories">
            <div className="plan-info__meal__stats-value">2260</div>
            <div className="plan-info__meal__stats-type">Calories</div>
          </div>
        </div>
      </div>
    </div>
  );
}
