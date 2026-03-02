import React from "react";
import { ProjectLayout } from "@/app/layouts/ProjectLayout";
import {
  creditCardMain,
  creditCardBalancing,
  creditCardDataAnalysis,
  creditCardEnsemble,
  creditCardLogisticRegression,
  creditCardProcessing,
  creditCardNeuralNetwork
} from "@/app/assets/images/credit-card-ml";

export default function CreditCardML() {
  return (
    <ProjectLayout
      title="Credit Card Fraud ML"
      subtitle="Detecting fraudulent credit card transactions using machine learning on an imbalanced dataset"
      overview="In this project, we explore a dataset from Kaggle consisting of 284,807 credit card transactions conducted over a two-day period in September 2013. The dataset is characterized by a significant class imbalance, with only 492 transactions identified as fraudulent, representing approximately 0.172% of the total transactions. The primary objective is to apply machine learning techniques to address fraud detection in credit card transactions."

      collaborator={{
        name: "Tochi Obinma",
        link: "https://www.linkedin.com/in/tochi-obinma-396703216/",
      }}
      highlights={{
        languages: "Python",
        tools: "pandas, scikit-learn, TensorFlow, matplotlib",
        dataset: "Kaggle Credit Card Transactions (2013)",
      }}
      sections={[
        {
          heading: "Project Background",
          content: (
            <>
              <p>
                Credit card fraud detection requires models that can accurately
                identify rare fraudulent transactions without overwhelming false
                positives. This project focuses on designing a robust detection
                pipeline capable of handling heavy class imbalance and optimizing
                recall — the ability to catch actual fraud cases.
              </p>

              <p>The project encompasses various steps, including loading and importing libraries, data preprocessing, analysis, and subsequent model building and evaluation. The primary model utilized is Logistic Regression, followed by the implementation of a shallow neural network, RandomForestClassifier, GradientBoostingClassifier, and LinearSVC. To address the class imbalance, a balanced dataset is created and used to train additional models. The project aims to compare the performance of different models in detecting fraudulent transactions and provide insights into the effectiveness of each approach.</p>

              <img
                src={creditCardProcessing}
                alt="Data preprocessing visualization"
                className="rounded-lg shadow-lg my-6"
              />
            </>
          ),
        },
        {
          heading: "Data Exploration & Preprocessing",
          content: (
            <>
              <p>
                The dataset consists of anonymized numerical features obtained
                through PCA transformation. Preprocessing involved scaling the
                features with <code>RobustScaler</code>, handling outliers, and
                splitting the dataset into train/test partitions. We also
                examined transaction patterns by hour and amount to understand
                potential biases.
              </p>
              <img
                src={creditCardDataAnalysis}
                alt="Data analysis plot"
                className="rounded-lg shadow-lg my-6"
              />
            </>
          ),
        },
        {
          heading: "Model Development",
          content: (
            <>
              <p>
                Multiple models were trained and tested, including Logistic
                Regression, Random Forest, Gradient Boosting, and a shallow
                neural network. Each model was optimized for recall and ROC-AUC
                metrics rather than overall accuracy.
              </p>
              <img
                src={creditCardLogisticRegression}
                alt="Model training"
                className="rounded-lg shadow-lg my-6"
              />
            </>
          ),
        },
        {
          heading: "Balancing the Dataset",
          content: (
            <>
              <p>
                Because fraudulent transactions represented less than 0.2% of the
                data, class imbalance severely biased the models toward predicting
                legitimate transactions. To correct this, we applied both
                undersampling and oversampling methods.
              </p>
              <img
                src={creditCardNeuralNetwork}
                alt="Class balancing chart"
                className="rounded-lg shadow-lg my-6"
              />
            </>
          ),
        },
        {
          heading: "Model Evaluation & Ensemble",
          content: (
            <>
              <p>
                After balancing, we evaluated models based on recall, precision,
                F1 score, and ROC-AUC. Ensemble models—combining Logistic
                Regression, Random Forest, and Gradient Boosting—achieved
                significant improvements in recall and reduced false negatives.
              </p>
              <img
                src={creditCardEnsemble}
                alt="Ensemble model visualization"
                className="rounded-lg shadow-lg my-6"
              />
            </>
          ),
        },
      ]}
      summary={
        [
        "The shallow neural network achieved a high accuracy of 100% on the validation set but showed lower precision, recall, and F1-score for detecting fraud, indicating potential overfitting. The Random Forest classifier demonstrated balanced performance with an accuracy of 100%, but a slightly lower F1-score for fraud detection compared to the neural network.",
        "The Gradient Boosting classifier exhibited robust performance with high accuracy and reasonable precision, recall, and F1-score for fraud detection. The Linear SVM, both balanced and unbalanced, demonstrated similar results, achieving high accuracy and balanced performance in fraud detection.",
        "In the oversampling scenario, where the dataset was balanced, logistic regression performed well, achieving high precision, recall, and F1-score for fraud detection. The shallow neural network trained on the balanced dataset showed improved performance compared to its counterpart trained on the imbalanced data."]
      }
      repoLink="https://github.com/KayeJD/Credit-Card-Fraud-Detector"
      mainImage={creditCardMain}
    />
  );
}
