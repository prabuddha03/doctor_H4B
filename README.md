# doctor_H4B

data.hist(figsize=(75,60), bins=30, edgecolor="black")
plt.show()



from sklearn.feature_selection import SelectKBest
from sklearn.feature_selection import chi2

X = df.drop('prognosis', axis=1)
y = df['prognosis']


# Assuming X contains the 133 columns and y contains the target variable
# Select the top 20 features using chi-square test
selector = SelectKBest(chi2, k=20)
selector.fit(X, y)

# Get the selected feature indices
selected_indices = selector.get_support(indices=True)

# Get the names of the selected features
selected_features = X.columns[selected_indices]

# Print the selected feature names
print(selected_features.tolist())

